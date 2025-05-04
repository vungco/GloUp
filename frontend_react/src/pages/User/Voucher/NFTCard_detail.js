import React from "react";
import { useParams } from "react-router-dom"; // nếu dùng router

const nftData = [
  {
    id: 1,
    name: "Cute warrior #1",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    mediaType: "video", // hoặc "video"
    price: 10,
    priceVND: 445313242,
    owner: "0x123...",
    currentUser: "0x456...", // ví hiện tại
    date: { day: 26, month: 6, year: 2023 },
    description: "Một nhân vật chibi dễ thương với lưỡi hái bóng tối.",
  },
  {
    id: 2,
    name: "Cute warrior #1",
    media: "https://ipfs.io/ipfs/Qm...",
    mediaType: "image", // hoặc "video"
    price: 10,
    priceVND: 445313242,
    owner: "0x123...",
    currentUser: "0x456...", // ví hiện tại
    date: { day: 26, month: 6, year: 2023 },
    description: "Một nhân vật chibi dễ thương với lưỡi hái bóng tối.",
  },
];

const NFTCard_detail = () => {
  // Ví dụ: lấy ID từ URL nếu bạn định dùng router
  const { tokenId } = useParams();
  const nft = nftData?.find((item) => item.id === parseInt(tokenId));

  if (!nft) return <p>NFT không tồn tại</p>;

  const isOwner = nft.owner?.toLowerCase() === nft.currentUser?.toLowerCase();

  return (
    <div className="container mt-4 pt-lg-4">
      <div className="row">
        {/* ẢNH hoặc VIDEO */}
        <div className="col-md-6">
          {nft.mediaType === "video" ? (
            <video
              src={nft.media}
              type="video/mp4"
              controls
              className="img-fluid rounded w-100"
            />
          ) : (
            <img src={nft.media} alt={nft.name} className="img-fluid rounded" />
          )}
        </div>

        {/* THÔNG TIN NFT */}
        <div className="col-md-6">
          <p className="text-muted">Đăng ngày:</p>
          <h3>
            Ngày {nft.date.day} / Tháng {nft.date.month} / Năm {nft.date.year}
          </h3>

          <div className="border rounded p-3 my-3">
            <span className="badge bg-dark mb-2">
              Giá hiện tại || Số lượng: {nft.amount || 1}
            </span>
            <h4>{nft.price} ETH</h4>
            <p className="text-muted">≈ {nft.priceVND.toLocaleString()} VNĐ</p>
          </div>

          {isOwner ? (
            <div className="alert alert-warning">
              Bạn không thể mua sản phẩm NFT của chính mình
            </div>
          ) : (
            <button className="btn btn-primary">Mua ngay</button>
          )}

          <div className="mt-3">
            <button className="btn btn-outline-secondary me-2">
              Người sở hữu
            </button>
            <button className="btn btn-outline-secondary">Lịch sử giá</button>
          </div>
        </div>
      </div>

      {/* MÔ TẢ */}
      <div className="mt-4">
        <h5>Mô tả</h5>
        <p>{nft.description}</p>
      </div>
    </div>
  );
};

export default NFTCard_detail;
