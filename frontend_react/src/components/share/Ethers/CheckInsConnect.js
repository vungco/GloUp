import { useAppKit } from "@reown/appkit/react";
import React, { useEffect } from "react";

const CheckConnected = () => {
  return (
    <div className="alert alert-light border border-warning d-flex align-items-center justify-content-between shadow-sm mt-lg-5">
      <div className="d-flex align-items-center">
        <i className="bi bi-exclamation-triangle-fill text-warning me-3 fs-4"></i>
        <div>
          <h6 className="mb-1 text-dark">
            Vui lòng đăng nhập tài khoản ví trước khi thực hiện thanh toán
          </h6>
          <p className="mb-0 text-muted small">
            Vui lòng hãy đăng nhập bằng để sử dụng ứng dụng Web3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckConnected;
