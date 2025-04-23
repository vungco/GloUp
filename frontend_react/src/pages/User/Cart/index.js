import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleToPay = () => {
    navigate("/Pay"); // Chuyển đến trang Pay
  };
  return (
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
            Giỏ hàng
          </p>
        </div>
      </div>

      <div className="container pb-3 mt-5">
        <p style={{ fontSize: "22px" }}>Giỏ hàng của bạn</p>
        <div className="row ">
          <div className="col-md-8 ">
            <div style={{ border: "1px solid #F8D5D7" }}>
              <div className="row p-2">
                <div className="col-md-6">Thông tin sản phẩm</div>
                <div className="col-md-2">Đơn giá</div>
                <div className="col-md-2">Số lượng</div>
                <div className="col-md-2">Thành tiền</div>
              </div>
              <div
                className="row p-2 w-100 m-0 align-items-center"
                style={{ borderTop: "1px solid #fff" }}
              >
                <div className="col-md-6 d-flex align-items-center">
                  <img
                    style={{ width: "108px" }}
                    src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg"
                  />
                  <div style={{ marginLeft: "8px" }}>
                    <p>Kem dưỡng da mặt phục hồi và chống lão hóa</p>
                    <button
                      style={{
                        border: "none",
                        color: "#c8760b",
                        background: "none",
                      }}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="col-md-2" style={{ color: "#c8760b" }}>
                  2.930.000đ
                </div>
                <div className="col-md-2">
                  <div
                    className="d-flex"
                    style={{ width: "100px", height: "30px" }}
                  >
                    <button
                      className="border-0"
                      style={{
                        width: "50px",
                        backgroundColor: "#d69c52",
                        marginRight: "8px",
                        borderRadius: "5px",
                      }}
                    >
                      -
                    </button>
                    <input
                      className="w-100 border-0"
                      type="number"
                      style={{ borderRadius: "5px" }}
                      value={quantity}
                      readOnly
                    ></input>
                    <button
                      className="border-0"
                      style={{
                        width: "50px",
                        backgroundColor: "#d69c52",
                        marginLeft: "8px",
                        borderRadius: "5px",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-2" style={{ color: "#c8760b" }}>
                  2.930.000đ
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 "></div>
              <div className="col-md-4 d-flex align-items-center justify-content-between mt-3">
                <p>Tổng tiền:</p>
                <p style={{ color: "#d69c52" }}>2.930.000đ</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 "></div>
              <div className="col-md-4 d-flex align-items-center justify-content-between mt-3">
                <button
                  onClick={handleToPay}
                  style={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "6px",
                    color: "#fff",
                    background: "#d69c52",
                    border: "none",
                  }}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
