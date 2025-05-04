import React from "react";

const NFTCard = ({ nft }) => {
  return (
    <div className="card h-100">
      {nft.type === "image" ? (
        <img src={nft.media} className="card-img-top" alt={nft.title} />
      ) : (
        <video controls className="w-100" style={{ height: "200px" }}>
          <source src={nft.media} type="video/mp4" />
        </video>
      )}
      <div className="card-body">
        <h6 className="card-title">{nft.title}</h6>
        <span className="badge bg-dark">Giá hiện tại</span>
        <p className="card-text mt-1">{nft.price}</p>
      </div>
    </div>
  );
};

export default NFTCard;
