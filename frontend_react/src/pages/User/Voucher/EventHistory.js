import React, { useEffect, useState } from "react";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { useAppKitAccount } from "@reown/appkit/react";
import { shortenAddr } from "../../../utils/shortAddress";
import { ethers, Interface } from "ethers";

const myCustomEvents = [
  "MarketItemCreated",
  "VoucherPurchased",
  "VoucherReselled",
  "VoucherUsed",
];

const EventHistory = () => {
  const { contractVoucher, ethersProvider } = useEthersProvider() || {};
  const { address } = useAppKitAccount();
  const [balance, setBalance] = useState(null);
  const [history, sethistory] = useState([]);

  const handleGetHistory = async () => {
    try {
      if (!contractVoucher || !ethersProvider) return;

      const contractAddress = await contractVoucher.getAddress(); // ethers v6
      const contractInterface = contractVoucher.interface;

      const contractBalance = await ethersProvider.getBalance(contractAddress);
      setBalance(ethers.formatEther(contractBalance));

      const logs = await ethersProvider.getLogs({
        address: contractAddress.toLowerCase(),
        fromBlock: 0,
        toBlock: "latest",
      });

      const decoded = logs
        .map((log) => {
          try {
            const parsed = contractInterface.parseLog(log); // ethers v6 vẫn còn parseLog()
            return {
              event: parsed.name,
              args: parsed.args,
              blockNumber: log.blockNumber,
              txHash: log.transactionHash,
            };
          } catch (err) {
            return { undecoded: true, log }; // dùng để debug nếu không match
          }
        })
        .filter(
          (log) => log && myCustomEvents.includes(log.event) // chỉ giữ event mình định nghĩa
        );
      sethistory(decoded);
    } catch (error) {
      alert("có lỗi trong quá trình thực hiện");
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    if (contractVoucher) {
      handleGetHistory();
    }
  }, [contractVoucher]);

  return (
    <div className="container py-4 text-light bg-dark min-vh-100">
      <h5 className="mb-3">📜 Lịch sử hoạt động (Event Logs)</h5>
      <table className="table table-dark table-bordered table-hover">
        <thead className="table-light text-dark">
          <tr>
            <th>Token ID</th>
            <th>Tên sự kiện</th>
            <th>Địa chỉ thực hiện</th>
            <th>Giá</th>
            <th>TransactionHash</th>
          </tr>
        </thead>
        <tbody>
          {history.map((event, index) => (
            <tr key={index}>
              <td>{event.args[0]}</td>
              <td>
                <span className={`badge bg-${getBadgeColor(event.event)}`}>
                  {event.event}
                </span>
              </td>
              <td>{event.args[1]}</td>
              <td>{ethers.formatEther(event.args[2])} ETH</td>
              <td>
                <a
                  href={`https://etherscan.io/tx/${event.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning"
                >
                  {shortenAddr(event.txHash)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
function getBadgeColor(type) {
  switch (type) {
    case "MarketItemCreated":
      return "primary";
    case "BUVoucherPurchasedY":
      return "success";
    case "VoucherReselled":
      return "info";
    case "VoucherUsed":
      return "danger";
    default:
      return "secondary";
  }
}

export default EventHistory;
