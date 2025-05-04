import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyEvents = [
  {
    id: 1,
    type: "CREATE",
    tokenId: 101,
    actor: "0xAdmin...123",
    time: "2025-05-01 10:00",
    note: "Created voucher 20% off",
  },
  {
    id: 2,
    type: "BUY",
    tokenId: 101,
    actor: "0xUser1...abc",
    time: "2025-05-02 15:20",
    note: "Bought for 0.1 ETH",
  },
  {
    id: 3,
    type: "USE",
    tokenId: 101,
    actor: "0xUser1...abc",
    time: "2025-05-03 09:30",
    note: "Voucher used and burned",
  },
];

function VoucherNft() {
  const navigate = useNavigate();

  const goToCreatePage = () => {
    navigate("/Admin/Voucher/create");
  };

  return (
    <div className="container py-4 text-light bg-dark min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>🎛️ Quản lý Voucher NFT</h3>
        <button className="btn btn-warning" onClick={goToCreatePage}>
          ➕ Tạo Voucher NFT
        </button>
      </div>

      <h5 className="mb-3">📜 Lịch sử hoạt động (Event Logs)</h5>
      <table className="table table-dark table-bordered table-hover">
        <thead className="table-light text-dark">
          <tr>
            <th>#</th>
            <th>Sự kiện</th>
            <th>Token ID</th>
            <th>Địa chỉ</th>
            <th>Thời gian</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {dummyEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>
                <span className={`badge bg-${getBadgeColor(event.type)}`}>
                  {event.type}
                </span>
              </td>
              <td>#{event.tokenId}</td>
              <td>
                <code>{event.actor}</code>
              </td>
              <td>{event.time}</td>
              <td>{event.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getBadgeColor(type) {
  switch (type) {
    case "CREATE":
      return "primary";
    case "BUY":
      return "success";
    case "RESELL":
      return "info";
    case "USE":
      return "danger";
    default:
      return "secondary";
  }
}

export default VoucherNft;
