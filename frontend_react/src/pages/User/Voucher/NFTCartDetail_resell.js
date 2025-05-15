import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatBlockchainTimestamp } from "../../../utils/formatTimestap";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { ethers } from "ethers";
import { shortenAddr } from "../../../utils/shortAddress";
import VoucherCardDetail from "./NFTCardDetail_view";

const NFTCartDetail_resell = () => {
  const { tokenId } = useParams();
  const { state } = useLocation();
  const voucher = state?.voucher;
  const { contractVoucher } = useEthersProvider() || {};

  const [loading, setLoading] = useState(false);
  const [txhash, settxhash] = useState();
  const [newprice, setnewprice] = useState("");
  const [showInput, setShowInput] = useState(false); // hiển thị input khi click "bán lại"

  if (!voucher)
    return <p className="text-center text-danger">Voucher không tồn tại</p>;

  const handlecreateMarketSale = async () => {
    if (!newprice || isNaN(newprice)) {
      alert("Vui lòng nhập giá mới hợp lệ");
      return;
    }

    try {
      setLoading(true);
      const txResponse = await contractVoucher.resellToken(
        tokenId,
        ethers.parseEther(newprice),
        {
          value: ethers.parseEther("0.00025"),
        }
      );
      settxhash(txResponse.hash);
      await txResponse.wait();
    } catch (error) {
      alert("Có lỗi trong quá trình thực hiện");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  return (
    <div>
      <VoucherCardDetail
        voucher={voucher}
        loading={loading}
        txhash={txhash}
        onPrimaryAction={handleShowInput}
        primaryActionLabel="📤 Bán lại"
      />

      {showInput && (
        <div className="container mt-4">
          <label className="form-label text-light">
            Nhập giá bán lại (ETH):
          </label>
          <input
            type="number"
            min="0"
            step="0.001"
            className="form-control mb-2"
            value={newprice}
            onChange={(e) => setnewprice(e.target.value)}
            placeholder="Ví dụ: 0.05"
          />
          <button
            className="btn btn-success w-100 fw-bold"
            onClick={() => handlecreateMarketSale()}
            disabled={loading}
          >
            ✅ Thực hiện bán lại
          </button>
        </div>
      )}
    </div>
  );
};

export default NFTCartDetail_resell;
