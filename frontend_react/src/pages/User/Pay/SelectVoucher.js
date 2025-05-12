import React, { useEffect, useState } from "react";
import "./index.css";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { ethers } from "ethers";

const initvouchers = [
  {
    tokenId: 1,
    name: "Voucher Giảm Giá Tết",
    discountValue: 10,
    description: "Giảm 10% cho đơn hàng từ 500k",
    expiry: "2025-06-30",
    type: "image",
    file: "https://ipfs.io/ipfs/your-image-hash",
  },
  {
    tokenId: 2,
    name: "Voucher Hè Sôi Động",
    discountValue: 15,
    description: "Giảm 15% cho đơn hàng bất kỳ trong tháng 6",
    expiry: "2025-06-15",
    type: "video",
    file: "https://ipfs.io/ipfs/your-video-hash",
  },
  {
    tokenId: 3,
    name: "Voucher Thành Viên Mới",
    discountValue: 20,
    description: "Chỉ áp dụng cho tài khoản đăng ký trong 30 ngày",
    expiry: "2025-12-31",
    type: "image",
    file: "https://ipfs.io/ipfs/your-image-hash-2",
  },
  {
    tokenId: 4,
    name: "Voucher Thành Viên Mới",
    discountValue: 20,
    description: "Chỉ áp dụng cho tài khoản đăng ký trong 30 ngày",
    expiry: "2025-12-31",
    type: "image",
    file: "https://ipfs.io/ipfs/your-image-hash-2",
  },
  {
    tokenId: 5,
    name: "Voucher Thành Viên Mới",
    discountValue: 20,
    description: "Chỉ áp dụng cho tài khoản đăng ký trong 30 ngày",
    expiry: "2025-12-31",
    type: "image",
    file: "https://ipfs.io/ipfs/your-image-hash-2",
  },
];

const SelectVoucher = ({ setvoucher, voucher, onClose }) => {
  const [vouchers, setvouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const { contractVoucher } = useEthersProvider() || {};

  useEffect(() => {
    if (contractVoucher) {
      getVouchers();
    }
  }, [contractVoucher]);

  const handleSelect = (voucher) => {
    if (selectedVoucher === voucher.tokenId) {
      setSelectedVoucher(null);
      setvoucher(null);
    } else {
      setSelectedVoucher(voucher.tokenId);
      // const selected = vouchers.find((v) => v.tokenId === tokenId);
      setvoucher(voucher);
    }
  };

  const getVouchers = async () => {
    try {
      const vouchers = await contractVoucher.fetchMyNFTs();

      const cleanVouchers = await Promise.all(
        vouchers.map(async (voucher) => {
          const discountValue = ethers
            .formatEther(voucher.discountValue)
            .toString();
          const price = ethers.formatEther(voucher.price).toString();

          // Bước 1: Lấy URL IPFS từ contractVoucher
          const tokenUrl = await contractVoucher.tokenURI(voucher.tokenId);

          // Bước 2: Gọi fetch lấy JSON metadata
          const res = await fetch(tokenUrl);
          const metadata = await res.json();

          // Bước 3: Nếu có file (ảnh/video), lấy thêm
          let fileData = null;
          if (metadata.file) {
            try {
              const fileRes = await fetch(metadata.file);
              const blob = await fileRes.blob();
              fileData = URL.createObjectURL(blob); // dùng để preview ảnh/video
            } catch (err) {
              console.error("Không thể load file IPFS:", err);
            }
          }

          return {
            name: metadata.name,
            description: metadata.description,
            type: metadata.type,
            file: fileData,
            price,
            discountValue,
            tokenId: voucher.tokenId.toString(),
            createdAt: voucher.createdAt.toString(),
            seller: voucher.seller.toString(),
            owner: voucher.owner.toString(),
          };
        })
      );
      console.log(cleanVouchers);

      setvouchers(cleanVouchers);
    } catch (error) {
      alert("address ko hợp lệ hoặc có lỗi");
    }
  };

  return (
    <div className="voucher-form-container">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Chọn Voucher</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <form>
          <div
            className="voucher-list overflow-auto"
            style={{ maxHeight: "400px" }}
          >
            <ul className="list-group">
              {vouchers.map((voucher, index) => (
                <li
                  key={index}
                  className={`list-group-item voucher-item d-flex align-items-center gap-3 ${
                    selectedVoucher === voucher.tokenId
                      ? "border-primary border-2"
                      : ""
                  }`}
                  onClick={() => handleSelect(voucher)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Media Left */}
                  <div style={{ width: "200px", flexShrink: 0 }}>
                    {voucher.type === "image" ? (
                      <img
                        src={voucher.file}
                        alt={voucher.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "120px", objectFit: "cover" }}
                      />
                    ) : (
                      <video
                        src={voucher.file}
                        controls
                        className="img-fluid rounded"
                        style={{ maxHeight: "120px", objectFit: "cover" }}
                      />
                    )}
                  </div>

                  {/* Info Middle */}
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                      {voucher.name} - Giảm {voucher.discountValue} ETH
                    </div>
                    <div className="text-muted small">
                      {voucher.description}
                    </div>
                  </div>

                  {/* Radio Right */}
                  <div>
                    <input
                      type="radio"
                      name="voucher"
                      className="form-check-input"
                      checked={selectedVoucher === voucher.id}
                      onChange={() => handleSelect(voucher.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={onClose}
            >
              Đóng
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (selectedVoucher) {
                  const selected = vouchers.find(
                    (v) => v.id === selectedVoucher
                  );
                  alert(`Đã chọn: ${selected.name}`);
                } else {
                  alert("Vui lòng chọn một voucher");
                }
              }}
            >
              Áp dụng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectVoucher;
