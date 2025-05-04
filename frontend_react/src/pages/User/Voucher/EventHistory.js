import React, { useState } from "react";

const exampleEvents = [
  {
    type: "Create",
    tokenId: 1,
    price: "1.5",
    account: "0xabc...",
    timestamp: "2025-05-04 12:30",
  },
  {
    type: "Sell",
    tokenId: 1,
    price: "2.0",
    account: "0xdef...",
    timestamp: "2025-05-04 13:00",
  },
  {
    type: "Apply",
    tokenId: 1,
    timestamp: "2025-05-04 14:00",
  },
];

const EventHistory = () => {
  // lấy events theo address của user
  const [events, setevents] = useState(exampleEvents);

  if (!events || events.length === 0) {
    return <p>Không có hoạt động nào.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Thời gian</th>
            <th>Sự kiện</th>
            <th>Token ID</th>
            <th>Giá (ETH)</th>
            <th>Tài khoản</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => {
            const { type, tokenId, price, account, timestamp } = event;

            let eventLabel = "";
            switch (type) {
              case "Create":
                eventLabel = "Tạo voucher";
                break;
              case "Sell":
                eventLabel = "Bán voucher";
                break;
              case "Resell":
                eventLabel = "Bán lại voucher";
                break;
              case "Apply":
                eventLabel = "Áp dụng / Đốt voucher";
                break;
              default:
                eventLabel = "Sự kiện không xác định";
            }

            return (
              <tr key={index}>
                <td>{timestamp || "-"}</td>
                <td>{eventLabel}</td>
                <td>#{tokenId}</td>
                <td>{price ? `${price} ETH` : "-"}</td>
                <td>{account ? account : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EventHistory;
