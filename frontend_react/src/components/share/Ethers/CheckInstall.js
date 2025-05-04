import React from "react";

const CheckInstall = () => {
  return (
    <div className="alert alert-light border border-warning d-flex align-items-center justify-content-between shadow-sm mt-lg-5">
      <div className="d-flex align-items-center">
        <i className="bi bi-exclamation-triangle-fill text-warning me-3 fs-4"></i>
        <div>
          <h6 className="mb-1 text-dark">Ví MetaMask chưa được cài đặt</h6>
          <p className="mb-0 text-muted small">
            Vui lòng cài MetaMask để kết nối và sử dụng ứng dụng Web3.
          </p>
        </div>
      </div>
      <a
        href="https://metamask.io/download.html"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-warning"
      >
        Tải MetaMask
      </a>
    </div>
  );
};

export default CheckInstall;
