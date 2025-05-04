import React from "react";
import { useState, useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useEthersProvider } from "../../../contexts/EtherContext";
import CheckInstall from "../../../components/share/Ethers/CheckInstall";
import CheckConnected from "../../../components/share/Ethers/CheckInsConnect";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { formatBlockchainTimestamp } from "../../../utils/formatTimestap";

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
  const { contract } = useEthersProvider() || {};

  const [orders, setorders] = useState();
  const [selectedStatus, setselectedStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (contract) {
      getOrders();
    }
  }, [contract]);

  const getOrdersByStatus = async (status) => {
    try {
      const orders = await contract.getOrdersByStatus(status);

      setorders(clenOrder(orders));
    } catch (error) {
      alert("address ko hợp lệ hoặc có lỗi");
    }
  };

  const getOrders = async () => {
    try {
      const orders = await contract.getAllOrders();

      setorders(clenOrder(orders));
    } catch (error) {
      alert("address ko hợp lệ hoặc có lỗi");
    }
  };

  function clenOrder(orders) {
    return orders.map((order) => ({
      id: order.id.toString(),
      buyer: order.buyer,
      createdAt: formatBlockchainTimestamp(order.createdAt),
      finalAmount: ethers.formatEther(order.finalAmount).toString(),
      voucherAmount: ethers.formatEther(order.voucherAmount).toString(),
      inforUserCID: order.inforUserCID,
      orderDetailCID: order.orderDetailCID,
      status: ORDER_STATUS[order.status],
    }));
  }

  function handleToOrderDetail(id) {
    navigate(`/Admin/OrderDetail/${id}`); // Chuyển đến trang Pay
  }

  return (
    <>
      {!isMetamaskInstalled && <CheckInstall />}
      {!isConnected && <CheckConnected />}

      {isMetamaskInstalled && isConnected && (
        <div class="container my-4">
          <h2>Danh sách đơn hàng</h2>

          <form class="mb-3">
            <div class="input-group mb-3">
              <select
                class="form-select"
                value={selectedStatus}
                onChange={(e) => setselectedStatus(e.target.value)}
              >
                <option hidden>Tất cả trạng thái</option>
                <option value="0">Chờ xác nhận</option>
                <option value="1">Đã xác nhận</option>
                <option value="2">Đã hủy</option>
                <option value="3">Đang giao hàng</option>
              </select>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => getOrdersByStatus(selectedStatus)}
              >
                🔍
              </button>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => getOrders()}
              >
                Hiển thị tất cả
              </button>
            </div>
          </form>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Buyer</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody id="orderTable">
              {orders &&
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.buyer}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      <span class="badge bg-warning">{order.status}</span>
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
