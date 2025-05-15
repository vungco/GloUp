import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatBlockchainTimestamp } from "../../../utils/formatTimestap";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { ethers } from "ethers";
import { shortenAddr } from "../../../utils/shortAddress";

const VoucherCardDetail = ({
  voucher,
  loading,
  txhash,
  onPrimaryAction,
  primaryActionLabel,
}) => {
  return (
    <div className="container mt-4 pt-lg-4 text-white bg-dark p-4 rounded-4 shadow-lg">
      {loading && (
        <div>
          <strong>Transaction:</strong>{" "}
          <a
            href={`https://sepolia.etherscan.io/tx/${txhash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary text-decoration-underline"
          >
            {shortenAddr(txhash)}
          </a>
        </div>
      )}
      <div className="row g-4 mt-3">
        {/* MEDIA */}
        <div className="col-md-6">
          {voucher.type === "video" ? (
            <video
              src={voucher.file}
              type="video/mp4"
              controls
              className="img-fluid rounded-4 border border-secondary w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          ) : (
            <img
              src={voucher.file}
              alt={voucher.name}
              className="img-fluid rounded-4 border border-secondary"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          )}
        </div>

        {/* DETAILS */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <p className="text-muted">
              Đăng ngày: {formatBlockchainTimestamp(voucher.createdAt)}
            </p>

            <h3 className="text-info fw-bold mb-3">{voucher.name}</h3>

            <div className="mb-3">
              <span className="badge bg-purple me-2">
                🎁 Giảm giá: {voucher.discountValue} ETH
              </span>
              <span className="badge bg-secondary">
                💰 Giá hiện tại: {voucher.price} ETH
              </span>
            </div>

            <div className="mb-3">
              <span className="badge bg-gradient bg-dark me-2">
                👤 Người sở hữu:
              </span>
              <code>{voucher.owner}</code>
            </div>

            <div className="mb-4">
              <span className="badge bg-gradient bg-dark me-2">
                🏪 Đang được bán bởi:
              </span>
              <code>{voucher.seller}</code>
            </div>
          </div>

          <div>
            <button
              className="btn btn-primary w-100 mb-2 fw-bold"
              onClick={() => onPrimaryAction()}
            >
              {primaryActionLabel}
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-5">
        <h5 className="text-info mb-2">📝 Mô tả</h5>
        <p className="text-light">{voucher.description}</p>
      </div>
    </div>
  );
};

export default VoucherCardDetail;
