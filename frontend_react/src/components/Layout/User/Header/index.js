import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import Login from "../../../../pages/User/Login";
import { useCart } from "../../../../contexts/CartContext";

function Header() {
  const { cartCount, fetchCartCount } = useCart();

  const [menuActive, setMenuActive] = useState(false);
  const [loginBoxActive, setLoginBoxActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const toggleLoginBox = () => setLoginBoxActive(!loginBoxActive);

  useEffect(() => {
    fetchCartCount();
  });

  // useEffect(() => {
  //     // Snow effect
  //     const container = document.getElementById('header');
  //     for (let i = 0; i < 50; i++) {
  //         let leftSnow = Math.floor(Math.random() * container.clientWidth);
  //         let topSnow = Math.floor(Math.random() * container.clientHeight);
  //         let widthSnow = Math.floor(Math.random() * 50);
  //         let timeSnow = Math.floor((Math.random() * 5) + 5);
  //         let blurSnow = Math.floor(Math.random() * 1);

  //         let div = document.createElement('div');
  //         div.classList.add('snow');
  //         div.style.left = leftSnow + 'px';
  //         div.style.top = topSnow + 'px';
  //         div.style.width = widthSnow + 'px';
  //         div.style.height = widthSnow + 'px';
  //         div.style.animationDuration = timeSnow + 's';
  //         div.style.filter = `blur(${blurSnow}px)`;
  //         container.appendChild(div);
  //     }
  // }, []);
  return (
    <div>
      {/* Header */}
      <header className="container-fluid" id="header">
        {/* <div className="snow"></div> */}
        <div className="container header">
          <div className="row align-items-center h-100">
            <div className="col-md-1">
              <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
              <i className="fa-solid fa-user" onClick={toggleLoginBox}></i>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-1">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="https://file.hstatic.net/200000259653/file/logo_f70542ec0f67426aa376166ef30_cb58b01f399a4e51a49015f5e0862dea.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2 row">
              <div className="col-md-6"></div>
              <div className="col-md-3">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="col-md-3">
                <div className="cart-icon">
                  <Link to="/Cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                  <span className="cart-badge">{cartCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu */}
      <div
        className={`overlay ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`sidebar ${menuActive ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          &times;
        </span>
        <div className="mt-4">
          <Link to="/">Trang chủ</Link>
          <Link to="/Product">Tất cả sản phẩm</Link>
          <Link to="/Receiver">Địa chỉ người nhận</Link>
          <Link to="/Voucher">Săn voucher</Link>
          <Link to="/Order">Đơn hàng của tôi</Link>
          <Link to="/News">Tin tức</Link>
          <Link to="/About">Giới thiệu</Link>
          <Link to="/Contact">Liên hệ</Link>
        </div>
        <p>Nhận bản tin mới nhất và hỗ trợ từ chúng tôi</p>
        <div className="d-flex">
          <input type="text" placeholder="Nhập Email của bạn...." />
          <button>Đăng ký</button>
        </div>
      </div>

      {/* Login Box */}
      <div
        className={`overlay1 ${loginBoxActive ? "active" : ""}`}
        onClick={toggleLoginBox}
      ></div>
      <div className={`login-box ${loginBoxActive ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleLoginBox}>
          &times;
        </span>
        <Login />
      </div>
    </div>
  );
}

export default Header;
