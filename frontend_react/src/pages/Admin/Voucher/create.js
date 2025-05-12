import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { getEthAmountFromVnd } from "../../../utils/getEthFromVnd";
import { uploadToPinata } from "../../../utils/uploadIpfs";
import { ethers } from "ethers";
import { shortenAddr } from "../../../utils/shortAddress";

function CreateVoucherNFT() {
  const { contractVoucher } = useEthersProvider() || {};
  const [nft_detail, setnft_detail] = useState({});
  const [price, setprice] = useState(0);
  const [discountValue, setdiscountValue] = useState(0);
  const [ethPriceVnd, setethPriceVnd] = useState(0);
  const [file, setfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [txhash, settxhash] = useState();

  useEffect(() => {
    const GetEth_vnd = async () => {
      const val = await getEthAmountFromVnd();
      setethPriceVnd(val);
    };
    GetEth_vnd();
  }, []);

  const handleCreateVoucher = async () => {
    try {
      setLoading(true);

      let detail = nft_detail;
      if (file) {
        console.log("File đang xử lý:", file);
        const file_hash = await uploadToPinata(file);

        let mediaType = "other"; // default
        if (file.type.startsWith("image/")) {
          mediaType = "image";
        } else if (file.type.startsWith("video/")) {
          mediaType = "video";
        }
        detail = {
          ...nft_detail,
          file: file_hash,
          type: mediaType, // 👈 thêm field này
        };

        setnft_detail(detail);
      }

      const tokenUrlhash = await uploadToPinata(JSON.stringify(detail));

      const txResponse = await contractVoucher.createToken(
        tokenUrlhash,
        ethers.parseEther((price / ethPriceVnd).toFixed(6).toString()),
        ethers.parseEther((discountValue / ethPriceVnd).toFixed(6).toString()),
        {
          value: 250000000000000,
        }
      );

      settxhash(txResponse.hash);
      await txResponse.wait();
      console.log("create:", txResponse);
      console.log("tokenUrl:", tokenUrlhash);
    } catch (error) {
      alert("có lỗi trong quá trình thực hiện");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container text-light bg-dark p-4 rounded mt-4">
      {loading && (
        <div>
          <div
            className="alert alert-info d-flex align-items-center gap-2"
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
        </div>
      )}
      <div className="row mb-4">
        {/* NFT Voucher Preview */}
        <div className="col-md-4 text-center">
          {file && (
            <div>
              <strong className="d-block">Preview:</strong>
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="nft_detail Media"
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px" }}
                />
              ) : (
                <video
                  controls
                  style={{ maxHeight: "200px" }}
                  className="w-100 rounded"
                >
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
        <div className="col-md-8">
          <h5>
            <strong>Voucher Name:</strong> {nft_detail.name}
          </h5>
          <p>
            <strong>Description:</strong> {nft_detail.description}
          </p>
          <p>
            <strong>Discount Value:</strong> {discountValue / ethPriceVnd}ETH
          </p>
          <p>
            <strong>Price:</strong> {price / ethPriceVnd} ETH
          </p>
        </div>
      </div>

      {/* Input Form */}
      <form>
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">
            Voucher Name
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light"
            value={nft_detail.name}
            onChange={(e) =>
              setnft_detail({ ...nft_detail, name: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-warning">
            Upload Image or Video
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            className="form-control bg-dark text-light"
            onChange={(e) => {
              const getfile = e.target.files[0];
              if (getfile) {
                setfile(getfile);
              }
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Description</label>
          <textarea
            rows="3"
            className="form-control bg-dark text-light"
            value={nft_detail.description}
            onChange={(e) =>
              setnft_detail({ ...nft_detail, description: e.target.value })
            }
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold text-warning">
              Discount (VNĐ)
            </label>
            <input
              type="number"
              className="form-control bg-dark text-light"
              value={discountValue}
              onChange={(e) => setdiscountValue(e.target.value)}
            />
            <label className="form-label fw-bold text-warning">
              ~ {discountValue / ethPriceVnd} ETH
            </label>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold text-warning">
              Price (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              className="form-control bg-dark text-light"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
            <label className="form-label fw-bold text-warning">
              ~ {price / ethPriceVnd} ETH
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleCreateVoucher()}
        >
          Create Voucher NFT
        </button>
      </form>
    </div>
  );
}

export default CreateVoucherNFT;
