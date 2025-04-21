import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  const handleToThanks = () => {
    navigate("/Thanks"); // Chuyển đến trang Pay
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
                <input />
                <p>Họ và tên</p>
              </div>
              <div className="contact_in4">
                <input />
                <p>Số điện thoại</p>
              </div>
              <div className="contact_in4">
                <input />
                <p>Địa chỉ cụ thể</p>
              </div>
              <div className="contact_in4">
                <select>
                  <option></option>
                </select>
                <p>Chọn tỉnh</p>
              </div>
              <div className="contact_in4">
                <select>
                  <option></option>
                </select>
                <p>Chọn huyện</p>
              </div>
              <div className="contact_in4">
                <select>
                  <option></option>
                </select>
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
            </div>
          </div>
          <div className="col-md-4">
            <h5>Đơn hàng</h5>
            <div
              className="d-flex align-items-center justify-content-between mt-3 pb-3"
              style={{ borderBottom: "1px solid #000" }}
            >
              <div className="d-flex align-items-center position-relative mt-2">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                  src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg"
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
                  1
                </div>
                <p style={{ marginLeft: "24px" }}>
                  Kem dưỡng da mặt phục hồi và chống lão hóa
                </p>
              </div>
              <p style={{ color: "#d69c52" }}>2.930.000đ</p>
            </div>
            <div className="mt-2" style={{ borderBottom: "1px solid #000" }}>
              <div className="d-flex align-items-center justify-content-between ">
                <p>Tạm tính</p>
                <p>2.930.000đ</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p>Phí vận chuyển</p>
                <p>0đ</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <p>Tổng cộng</p>
              <p style={{ color: "#d69c52", fontSize: "24px" }}>2.930.000đ</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <Link to="/Cart" style={{ color: "#d69c52" }}>
                {" "}
                Quay về giỏ hàng
              </Link>
              <button
                onClick={handleToThanks}
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
  );
}

export default Pay;
