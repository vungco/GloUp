import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import userApi from "../../../api/userApi";
import authUser from "../../../api/authUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    authUser
      .login(data)
      .then((response) => {
        // Lưu token vào localStorage
        let token = response.token;
        localStorage.setItem("token", token);

        // Lưu thông tin người dùng trong state (hoặc context)
        setUser(response.user);

        localStorage.setItem("user", JSON.stringify(response.user));

        // console.log('Đăng nhập thành công!', response.data);
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        }
      });
  };
  useEffect(() => {
    if (user !== null) {
      if (user.role == "admin") {
        window.location.href = "/Admin/Home";
      } else {
        window.location.href = "/";
      }
    }
  }, [user]);

  return (
    <div className="form-login row mt-5">
      <div className="col-md-7">
        <form className="d-flex flex-column align-items-center justify-content-center">
          <h5>Chào mừng trở lại</h5>
          <label>EMAIL</label>
          <input
            type="text"
            placeholder="Nhập địa chỉ email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>MẬT KHẨU</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgot-password">Quên mật khẩu?</Link>
          <button type="submit" onClick={handleLogin}>
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="col-md-5 form-login_banner p-0">
        <div className="content w-100 h-100">
          <p className="mt-5">THÀNH VIÊN MỚI?</p>
          <p>Đăng ký và khám phá nhiều ưu đãi mới!</p>
          <Link to="/register">
            <button>Đăng ký</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
