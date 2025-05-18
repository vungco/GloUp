import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { pathUrl } from "../../../utils/path";
import receiverApi from "../../../api/receiverApi";
import { useAppKitAccount } from "@reown/appkit/react";
import { shortenAddr } from "../../../utils/shortAddress";
import { getEthAmountFromVnd } from "../../../utils/getEthFromVnd";
import { ethers, parseEther } from "ethers";
import { uploadToPinata } from "../../../utils/uploadIpfs";
import { useEthersProvider } from "../../../contexts/EtherContext";
import CheckInstall from "../../../components/share/Ethers/CheckInstall";
import { checkwalletInstall } from "../../../utils/checkwallet";
import CheckConnected from "../../../components/share/Ethers/CheckInsConnect";
import SelectVoucher from "./SelectVoucher";

function Pay({ getcarts }) {
  const { isConnected } = useAppKitAccount();
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(true);

  const navigate = useNavigate();
  const [carts, setcarts] = useState([]);
  const [receiver, setreceiver] = useState([]);
  const [sumtotalmoney, setsumtotalmoney] = useState(0);
  const [ethPriceVnd, setethPriceVnd] = useState(null);
  const [voucherAmount, setvoucherAmount] = useState(0);
  const [finalAmount, setfinalAmount] = useState(0);

  const { contractOrder, contractVoucher } = useEthersProvider() || {};
  const [loading, setLoading] = useState(false);
  const [txhash, settxhash] = useState();
  const [showFormVoucher, setshowFormVoucher] = useState(false);
  const [voucher, setvoucher] = useState(null);

  useEffect(() => {
    setIsMetamaskInstalled(checkwalletInstall());
    console.log(contractOrder);
  }, []);

  //   lấy giá eth hiện tại

  useEffect(() => {
    const GetEth_vnd = async () => {
      const val = await getEthAmountFromVnd();
      setethPriceVnd(val);
    };
    GetEth_vnd();
  }, []);

  const onCloseFormVoucher = () => {
    setshowFormVoucher(false);
  };

  //   thực hiện chuyển đổi vnđ => wei
  function formatToWei(vndAmount) {
    const ethAmount = vndAmount / ethPriceVnd;
    const ethAmountInWei = ethers.parseEther(ethAmount.toString()); // Chuyển ETH thành Wei (18 decimal places)
    return ethAmountInWei;
  }

  //  load dữ liệu carts
  useEffect(() => {
    setcarts(getcarts);

    receiverApi
      .getReceiverDefault()
      .then((response) => {
        setreceiver(...response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }, []);

  useEffect(() => {
    if (carts) {
      handlesumtotalmoney();
    }
  }, [carts]);

  useEffect(() => {
    if (voucher) {
      setvoucherAmount(voucher.discountValue);
    }
  }, [voucher]);

  useEffect(() => {
    if (ethPriceVnd && sumtotalmoney) {
      const price = sumtotalmoney / ethPriceVnd - voucherAmount;
      if (price < 0) {
        setfinalAmount(0);
      } else {
        setfinalAmount(price);
      }
    }
  }, [sumtotalmoney, voucherAmount, ethPriceVnd]);

  const ToThanks = () => {
    navigate("/Thankyou"); // Chuyển đến trang Pay
  };

  function handlesumtotalmoney() {
    const total = carts.reduce((sum, cart) => sum + cart.totalmoney, 0);
    setsumtotalmoney(total);
  }

  const handleOrder = async () => {
    try {
      setLoading(true);
      const vc_amount = 0;
      if (voucherAmount !== 0) {
        vc_amount = ethers.parseEther(voucherAmount.toString());
      }

      // 1. Upload dữ liệu
      const data_carts = JSON.stringify(carts);
      const data_receiver = JSON.stringify(receiver);
      const hash_carts = await uploadToPinata(data_carts);
      const hash_receiver = await uploadToPinata(data_receiver);

      // 2. Gọi createOrder (gửi ETH)
      const txResponse = await contractOrder.createOrder(
        vc_amount,
        ethers.parseEther(finalAmount.toFixed(6).toString()),
        hash_receiver,
        hash_carts,
        {
          value: ethers.parseEther(finalAmount.toFixed(6).toString()),
        }
      );
      settxhash(txResponse.hash);
      await txResponse.wait();

      // 3. Nếu có voucher, gọi applyVoucher
      if (voucher?.tokenId) {
        const burnTx = await contractVoucher.applyVoucher(voucher.tokenId);
        await burnTx.wait();
      }

      // 4. Điều hướng sau khi hoàn tất
      console.log("IPFS hashes:", hash_carts, hash_receiver);
      ToThanks();
    } catch (error) {
      alert("Có lỗi trong quá trình thực hiện");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isMetamaskInstalled && <CheckInstall />}
      {!isConnected && <CheckConnected />}
      {isMetamaskInstalled && isConnected && (
        <div>
          <div className="container-fluid" style={{ background: "#F8D5D7" }}>
            <div
              className="container d-flex align-items-center"
              style={{ height: "50px" }}
            >
              <p className="m-0" style={{ color: "#fff" }}>
                Trang chủ /{" "}
              </p>
              <p className="m-0" style={{ color: "#d69c52" }}>
                {" "}
                Thông tin đơn hàng
              </p>
            </div>
          </div>

          <div className="container  pt-5 pb-5">
            <div className="row">
              <div className="col-md-4">
                <h5>Thông tin nhận hàng</h5>
                <div className="mt-3">
                  <div className="contact_in4">
                    <input value={receiver.name} className="pt-3 pb-2" />
                    <p>Họ và tên</p>
                  </div>
                  <div className="contact_in4">
                    <input value={receiver.phone} className="pt-3 pb-2" />
                    <p>Số điện thoại</p>
                  </div>
                  <div className="contact_in4">
                    <input value={receiver.dsc} className="pt-3 pb-2" />
                    <p>Địa chỉ cụ thể</p>
                  </div>
                  <div className="contact_in4">
                    {/* <select>
                  <option></option>
                </select> */}
                    <input value={receiver.city} className="pt-3 pb-2" />
                    <p>Chọn tỉnh</p>
                  </div>
                  <div className="contact_in4">
                    {/* <select>
                  <option></option>
                </select> */}
                    <input value={receiver.district} className="pt-3 pb-2" />

                    <p>Chọn huyện</p>
                  </div>
                  <div className="contact_in4">
                    {/* <select>
                  <option></option>
                </select> */}
                    <input value={receiver.commune} className="pt-3 pb-2" />

                    <p>Chọn xã</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5>Thanh toán</h5>
                  <div
                    className="d-flex align-items-center justify-content-center mt-3"
                    style={{
                      border: "1px solid #000",
                      width: "80%",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  >
                    <p className="m-0">Thanh toán trực tiếp bằng ví Metamask</p>
                  </div>
                  <div class="mt-3">
                    <label>Chọn Voucher</label>
                    <button onClick={() => setshowFormVoucher(true)}>
                      Voucher Shop{" "}
                    </button>
                    {showFormVoucher && (
                      <>
                        <div className="overlay1 active"></div>
                        <SelectVoucher
                          setvoucher={setvoucher}
                          onClose={onCloseFormVoucher}
                          voucher={voucher}
                        />
                      </>
                    )}
                  </div>
                  {loading && (
                    <div
                      className="alert alert-info d-flex align-items-center gap-2 mt-3"
                      role="alert"
                    >
                      <div
                        className="spinner-border spinner-border-sm text-primary"
                        role="status"
                        aria-hidden="true"
                      ></div>
                      <div>
                        <strong>Transaction:</strong>{" "}
                        <a
                          href={`https://sepolia.etherscan.io/tx/${txhash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-primary text-decoration-underline"
                        >
                          {shortenAddr(txhash)}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <h5>Đơn hàng</h5>
                {carts &&
                  carts.map((cart) => (
                    <div
                      key={cart.product.id}
                      className="d-flex align-items-center justify-content-between mt-3 pb-3"
                    >
                      <div className="d-flex align-items-center position-relative mt-2">
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "5px",
                          }}
                          src={pathUrl(cart.product.img)}
                        />
                        <div
                          style={{
                            position: "absolute",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            background: "#d69c52",
                            textAlign: "center",
                            top: "-15%",
                            left: "10%",
                          }}
                        >
                          {cart.quantity}
                        </div>
                        <p style={{ marginLeft: "24px" }}>
                          {cart.product.name}
                        </p>
                      </div>
                      <p style={{ color: "#d69c52" }}>{cart.totalmoney}</p>
                    </div>
                  ))}

                <div
                  className="mt-2"
                  style={{
                    borderBottom: "1px solid #000",
                    borderTop: "1px solid #000",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <p>Tạm tính</p>
                    <p>
                      {sumtotalmoney} ~ {sumtotalmoney / ethPriceVnd} ETH{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>Voucher áp dụng</p>
                    <p>{voucherAmount} ETH</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <p>Tổng cộng</p>
                  <p style={{ color: "#d69c52", fontSize: "24px" }}>
                    {finalAmount}
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <p>~</p>
                  <p style={{ color: "#d69c52", fontSize: "24px" }}>
                    {ethPriceVnd && finalAmount} ETH
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <Link to="/Cart" style={{ color: "#d69c52" }}>
                    {" "}
                    Quay về giỏ hàng
                  </Link>
                  <button
                    onClick={handleOrder}
                    style={{
                      width: "100px",
                      height: "40px",
                      borderRadius: "5px",
                      border: "none",
                      background: "#d69c52",
                      color: "#fff",
                    }}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pay;
