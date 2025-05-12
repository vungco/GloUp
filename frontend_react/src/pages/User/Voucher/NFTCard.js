import React from "react";
import "./index.css";

const NFTCard = ({ nft }) => {
  return (
    <div
      className="card h-100 bg-dark text-white border border-secondary shadow"
      style={{ borderRadius: "1rem", overflow: "hidden", transition: "0.3s" }}
    >
      {nft.type === "image" && (
        <img
          src={nft.file}
          className="card-img-top"
          alt={nft.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      {nft.type === "video" && (
        <video
          controls
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
        >
          <source src={nft.file} type="video/mp4" />
        </video>
      )}
      {!nft.type && (
        <img
          src={nft.file}
          className="card-img-top"
          alt={nft.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        <h6 className="card-title text-info fw-bold mb-3">{nft.name}</h6>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-purple text-light">🎁 Giảm giá</span>
          <span className="text-success fw-semibold">
            {nft.discountValue} ETH
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-secondary">💰 Giá hiện tại</span>
          <span className="text-primary fw-semibold">{nft.price} ETH</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
