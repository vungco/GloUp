import React from "react";
import { useState, useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useEthersProvider } from "../../../contexts/EtherContext";
import CheckInstall from "../../../components/share/Ethers/CheckInstall";
import CheckConnected from "../../../components/share/Ethers/CheckInsConnect";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const ORDER_STATUS = {
  0: "Pending",
  1: "Confirmed",
  2: "Cancelled",
  3: "Shipping",
  3: "Successful",
};

const Order = () => {
  const [isMetamaskInstalled] = useState(true);
  const { isConnected, address } = useAppKitAccount();
  const { contractOrder } = useEthersProvider() || {};

  const [orders, setorders] = useState();
  const [inputAddress, setinputAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (contractOrder) {
      getOrdersOfByner(address);
    }
  }, [contractOrder]);

  function formatBlockchainTimestamp(tsBN) {
    const ts =
      typeof tsBN.toNumber === "function" ? tsBN.toNumber() : Number(tsBN); // hỗ trợ BigNumber & BigInt
    return new Date(ts * 1000).toLocaleString(); // hoặc dùng dayjs nếu muốn
  }

  const getOrdersOfByner = async (address) => {
    try {
      const orders = await contractOrder.getOrdersByBuyer(address);
      const realOrders = Array.from(orders);
      const cleanOrders = orders.map((order) => ({
        id: order.id.toString(),
        buyer: order.buyer,
        createdAt: formatBlockchainTimestamp(order.createdAt),
        finalAmount: ethers.formatEther(order.finalAmount).toString(),
        voucherAmount: ethers.formatEther(order.voucherAmount).toString(),
        inforUserCID: order.inforUserCID,
        orderDetailCID: order.orderDetailCID,
        status: ORDER_STATUS[order.status],
      }));

      setorders(cleanOrders);
    } catch (error) {
      alert("address ko hợp lệ hoặc có lỗi");
    }
  };

  function handleToOrderDetail(id) {
    navigate(`/OrderDetail/${id}`); // Chuyển đến trang Pay
  }

  return (
    <>
      {!isMetamaskInstalled && <CheckInstall />}
      {!isConnected && <CheckConnected />}

      {isMetamaskInstalled && isConnected && (
        <div class="container my-4">
          <h2>Danh sách đơn hàng</h2>

          <form class="mb-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Tìm theo address khác"
                id="searchInput"
                value={inputAddress}
                onChange={(e) => setinputAddress(e.target.value)}
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="searchButton"
                onClick={() => getOrdersOfByner(inputAddress)}
              >
                🔍
              </button>
            </div>
          </form>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody id="orderTable">
              {orders &&
                orders.map((order, index) => (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      {order.status === "Pending" && (
                        <span class="badge bg-warning">{order.status}</span>
                      )}
                      {order.status !== "Pending" && (
                        <span class="badge bg-dark">{order.status}</span>
                      )}
                      {order.status === "Successful" && (
                        <span class="badge bg-success">{order.status}</span>
                      )}
                    </td>
                    <td>
                      <button
                        class="btn btn-outline-primary btn-sm"
                        onClick={() => handleToOrderDetail(order.id)}
                      >
                        👁️ Xem
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Order;
