import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/share/ProductItem";
import productApi from "../../../api/productApi";
import cartApi from "../../../api/cartApi";
import { useNavigate } from "react-router-dom";
import { pathUrl } from "../../../utils/path";
import { getUser_id } from "../../../utils/user";
import { useCart } from "../../../contexts/CartContext";

function Product() {
  const { fetchCartCount } = useCart();

  const navigate = useNavigate();
  const [products, setproducts] = useState(null);

  useEffect(() => {
    productApi
      .getAll()
      .then((response) => {
        setproducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }, []);

  const handleToProductDetails = (id) => {
    navigate(`/ProductDetail/${id}`); // Chuyển đến trang Pay
  };
  const handleToAddCart = (product) => {
    const user_id = getUser_id();
    const data = {
      user_id,
      product_id: product.id,
      quantity: 1,
      totalmoney: product.price,
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
            Sản phẩm
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="row" style={{ margin: "30px 0" }}>
          {products &&
            products.map((product) => (
              <div className="col-md-3">
                <div>
                  <div className="product-card" key={product.id}>
                    <img src={pathUrl(product.img)} alt="Sản phẩm 1" />
                    <p>{product.name}</p>
                    <p style={{ color: "red" }}>{product.price}</p>
                    <div className="product-icons">
                      <i
                        className="fas fa-shopping-cart"
                        onClick={() => handleToAddCart(product)}
                      />
                      <i
                        className="fas fa-eye"
                        onClick={() => handleToProductDetails(product.id)}
                        title="chi tiết sản phẩm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
