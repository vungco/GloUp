import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ imgSrc, name, price }) => {
  const navigate = useNavigate();
  const handleToProductDetails = () => {
    navigate("/ProductDetails"); // Chuyển đến trang Pay
  };
  const handleToAddCart = () => {
    //logic thêm vào giỏ hàng
  };
  return (
    <div>
      <div className="product-card">
        <img src={imgSrc} alt="Sản phẩm 1" />
        <p>{name}</p>
        <p style={{ color: "red" }}>{price}</p>
        <div className="product-icons">
          <i className="fas fa-shopping-cart" onClick={handleToAddCart} />
          <i
            className="fas fa-eye"
            onClick={handleToProductDetails}
            title="chi tiết sản phẩm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
