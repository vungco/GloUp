import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import cartApi from "../../../api/cartApi";
import { pathUrl } from "../../../utils/path";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [carts, setcarts] = useState(null);
  const [purchase_quantity, setpurchase_quantity] = useState(null);
  const [totalmoney, settotalmoney] = useState(null);
  const [selectCarts, setselectCarts] = useState([]);

  useEffect(() => {
    cartApi
      .getByIdUser()
      .then((response) => {
        setcarts(response.data);
        setpurchase_quantity(response.data.quantity);
        settotalmoney(response.data.totalmoney);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }, []);

  const handleToPay = () => {
    navigate("/Pay", {
      state: {
        type: "cart",
        data: selectCarts,
      },
    }); // Chuyển đến trang Pay
  };

  function handleSetPurchaseQuan(operation, cart) {
    if (operation == "-" && cart.quantity > 1) {
      setcarts((prevcarts) =>
        prevcarts.map((item) =>
          item.id === cart.id ? { ...item, quantity: cart.quantity - 1 } : item
        )
      );
    } else if (operation == "+") {
      setcarts((prevcarts) =>
        prevcarts.map((item) =>
          item.id === cart.id ? { ...item, quantity: cart.quantity + 1 } : item
        )
      );
    }
  }

  function changeQuantity(value, cart) {
    let vl;
    if (value == "0" || value == "") {
      vl = 1;
    } else if (value !== "-" && value !== "+") {
      vl = parseInt(value);
    }
    setcarts((prevcarts) =>
      prevcarts.map((item) =>
        item.id === cart.id ? { ...item, quantity: vl } : item
      )
    );
  }

  const handleToggleCart = (cartId) => {
    setselectCarts(
      (prev) =>
        prev.includes(cartId)
          ? prev.filter((id) => id !== cartId) // Gỡ ra
          : [...prev, cartId] // Thêm vào
    );
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
                <div className="col-md-2">Chọn tất cả</div>
                <div className="col-md-4">Thông tin sản phẩm</div>
                <div className="col-md-2">Đơn giá</div>
                <div className="col-md-2">Số lượng</div>
                <div className="col-md-2">Thành tiền</div>
              </div>
              {carts &&
                carts.map((cart) => (
                  <div
                    className="row p-2 w-100 m-0 align-items-center"
                    style={{ borderTop: "1px solid #fff" }}
                  >
                    <div className="col-md-2 d-flex align-items-center">
                      <input
                        type="checkbox"
                        onChange={() => handleToggleCart(cart.id)}
                      />
                    </div>

                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        style={{ width: "108px" }}
                        src={pathUrl(cart.product.img)}
                      />
                      <div style={{ marginLeft: "8px" }}>
                        <p>{cart?.product.name}</p>
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
                      {cart?.product.price}
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
                          onClick={() => handleSetPurchaseQuan("-", cart)}
                        >
                          -
                        </button>
                        <input
                          className="w-100 border-0"
                          type="number"
                          style={{ borderRadius: "5px" }}
                          value={cart.quantity}
                          onChange={(e) => changeQuantity(e.target.value, cart)}
                        ></input>
                        <button
                          className="border-0"
                          style={{
                            width: "50px",
                            backgroundColor: "#d69c52",
                            marginLeft: "8px",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSetPurchaseQuan("+", cart)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2" style={{ color: "#c8760b" }}>
                      {cart.totalmoney}
                    </div>
                  </div>
                ))}
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
