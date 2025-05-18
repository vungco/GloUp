import { Link } from "react-router-dom";
import NFTCard from "./NFTCard";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useEthersProvider } from "../../../contexts/EtherContext";
import "./index.css";

const mockNFTs = [];

const MarketItems = () => {
  const [voucherNfts, setvoucherNfts] = useState(mockNFTs);
  const { contractVoucher } = useEthersProvider() || {};

  useEffect(() => {
    if (contractVoucher) {
      getVouchers();
    }
  }, [contractVoucher]);

  const getVouchers = async () => {
    try {
      const vouchers = await contractVoucher.fetchMarketItems();

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

      setvoucherNfts(cleanVouchers);
    } catch (error) {
      alert("address ko hợp lệ hoặc có lỗi");
    }
  };

  return (
    <div className="row">
      {voucherNfts &&
        voucherNfts.map((voucher) => (
          <div className="col-md-3 mb-4">
            <Link to={`/Voucher/${voucher.tokenId}/sell`} state={{ voucher }}>
              <NFTCard key={voucher.tokenId} nft={voucher} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MarketItems;
