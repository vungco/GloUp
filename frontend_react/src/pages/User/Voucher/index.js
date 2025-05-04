import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MarketItems from "./MarketItems";
import MyVouchers from "./MyVouchers";
import EventHistory from "./EventHistory";

export default function Home() {
  const [tab, setTab] = useState("sell");

  return (
    <div className="container mt-4 p-lg-5">
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "sell" ? "active" : ""}`}
            onClick={() => setTab("sell")}
          >
            NFT đang bán
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "owned" ? "active" : ""}`}
            onClick={() => setTab("owned")}
          >
            NFT sở hữu
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "history" ? "active" : ""}`}
            onClick={() => setTab("history")}
          >
            Lịch sử
          </button>
        </li>
      </ul>

      <div className="d-flex justify-content-end mb-3">
        <select className="form-select w-auto">
          <option>Most Recent</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </select>
      </div>

      {tab === "sell" && <MarketItems />}
      {tab === "owned" && <MyVouchers />}
      {tab === "history" && <EventHistory />}
    </div>
  );
}
