import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatBlockchainTimestamp } from "../../../utils/formatTimestap";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { ethers } from "ethers";
import { shortenAddr } from "../../../utils/shortAddress";
import VoucherCardDetail from "./NFTCardDetail_view";

const NFTCartDetail_sell = () => {
  const { tokenId } = useParams();
  const { state } = useLocation();
  const voucher = state?.voucher;
  const { contractVoucher } = useEthersProvider() || {};

  const [loading, setLoading] = useState(false);
  const [txhash, settxhash] = useState();

  if (!voucher)
    return <p className="text-center text-danger">Voucher không tồn tại</p>;

  const handlecreateMarketSale = async () => {
    try {
      setLoading(true);

      const txResponse = await contractVoucher.createMarketSale(tokenId, {
        value: ethers.parseEther(voucher.price),
      });
      settxhash(txResponse.hash);
      await txResponse.wait();
    } catch (error) {
      alert("có lỗi trong quá trình thực hiện");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <VoucherCardDetail
        voucher={voucher}
        loading={loading}
        txhash={txhash}
        onPrimaryAction={handlecreateMarketSale}
        primaryActionLabel="🛒 Mua ngay"
      />
    </div>
  );
};

export default NFTCartDetail_sell;
