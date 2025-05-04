import { Link } from "react-router-dom";
import NFTCard from "./NFTCard";
import React, { useState } from "react";

const mockNFTs = [
  {
    id: 1,
    title: "Mustang hoang dã - Bụi #4",
    media: "https://via.placeholder.com/300x200?text=Image",
    price: "6759 ETH",
    type: "image",
  },
  {
    id: 2,
    title: "Bão và mây #9",
    media: "https://via.placeholder.com/300x200?text=Image",
    price: "55.5 ETH",
    type: "image",
  },
  {
    id: 3,
    title: "Thiên hà kỳ diệu #16",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    price: "220.65 ETH",
    type: "video",
  },
  {
    id: 4,
    title: "Giác ngộ #18",
    media: "https://via.placeholder.com/300x200?text=Image",
    price: "1000.99 ETH",
    type: "image",
  },
];

const MarketItems = () => {
  const [voucherNfts, setvoucherNfts] = useState(mockNFTs);

  return (
    <div className="row">
      {voucherNfts &&
        voucherNfts.map((voucher) => (
          <div className="col-md-3 mb-4">
            <Link to={`/Voucher/${voucher.id}`}>
              <NFTCard key={voucher.id} nft={voucher} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MarketItems;
