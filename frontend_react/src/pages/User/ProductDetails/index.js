import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import { pathUrl } from "../../../utils/path";
import "./index.css";
import { getUser_id } from "../../../utils/user";
import cartApi from "../../../api/cartApi";
import { useCart } from "../../../contexts/CartContext";

function ProductDetails() {
  const { fetchCartCount } = useCart();

  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  const [purchase_quantity, setpurchase_quantity] = useState(1);
  const id = useParams().id;

  useEffect(() => {
    if (id) {
      productApi
        .getById(id)
        .then((response) => {
          setproduct(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  function handleSetPurchaseQuan(operation) {
    if (operation == "-" && purchase_quantity > 1) {
      setpurchase_quantity(purchase_quantity - 1);
    } else if (operation == "+") {
      setpurchase_quantity(purchase_quantity + 1);
    }
  }

  function changeQuantity(value) {
    let vl;
    if (value == "0" || value == "") {
      vl = 1;
    } else if (value !== "-" && value !== "+") {
      vl = parseInt(value);
    }
    setpurchase_quantity(vl);
  }

  const handleToPay = () => {
    navigate("/Pay", {
      state: {
        type: "product_detail",
        data: [
          {
            product,
            quantity: purchase_quantity,
            totalmoney: purchase_quantity * product.price,
          },
        ],
      },
    }); // Chuyển đến trang Pay
  };

  function addToCart() {
    alert("ok");
    const user_id = getUser_id();
    const data = {
      user_id,
      product_id: product.id,
      quantity: purchase_quantity,
      totalmoney: product.price * purchase_quantity,
    };
    cartApi
      .create(data)
      .then((response) => {
        alert("đã thêm vào giỏ hàng");
        fetchCartCount();
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
            Chi tiết sản phẩm
          </p>
        </div>
      </div>
      <div className="mt-3 container">
        <div className="row">
          <div className="col-md-6">
            <img style={{ width: "500px" }} src={pathUrl(product.img)} />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              {product.name}
            </p>
            <p>
              <span style={{ fontWeight: "500", marginRight: "5px" }}>
                Tình trạng:
              </span>
              <span>{product.quantity > 0 ? "Còn hàng" : "Đã hết hàng"}</span>
            </p>
            <p style={{ color: "red", fontSize: "18px" }}>{product.price}</p>
            <p style={{ fontSize: "20px" }}>Số lượng :</p>
            <div className="d-flex" style={{ width: "100px", height: "30px" }}>
              <button
                className="border-0"
                style={{
                  width: "50px",
                  backgroundColor: "#d69c52",
                  marginRight: "8px",
                  borderRadius: "5px",
                }}
                onClick={() => handleSetPurchaseQuan("-")}
              >
                -
              </button>
              <input
                className="w-100 custom-input"
                type="number"
                style={{ borderRadius: "5px" }}
                value={purchase_quantity}
                min={1}
                onChange={(e) => changeQuantity(e.target.value)}
              ></input>
              <button
                className="border-0"
                style={{
                  width: "50px",
                  backgroundColor: "#d69c52",
                  marginLeft: "8px",
                  borderRadius: "5px",
                }}
                onClick={() => handleSetPurchaseQuan("+")}
              >
                +
              </button>
            </div>
            <div className="d-flex mt-3">
              {product.quantity > 0 && (
                <>
                  <button
                    style={{
                      width: "180px",
                      height: "40px",
                      borderRadius: "5px",
                      margin: "8px",
                      border: "none",
                      background: "#d69c52",
                      color: "#fff",
                    }}
                    onClick={() => addToCart()}
                  >
                    {" "}
                    Thêm vào giỏ hàng
                  </button>
                  <button
                    style={{
                      width: "180px",
                      height: "40px",
                      borderRadius: "5px",
                      margin: "8px",
                      border: "none",
                      background: "#d69c52",
                      color: "#fff",
                    }}
                    onClick={handleToPay}
                  >
                    Mua ngay
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
