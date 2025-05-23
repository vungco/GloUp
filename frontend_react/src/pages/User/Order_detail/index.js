import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useEthersProvider } from "../../../contexts/EtherContext";
import { ethers } from "ethers";
import { formatBlockchainTimestamp } from "../../../utils/formatTimestap";
import Loading from "../../../utils/load";
import { formatNumber } from "../../../utils/formatNumber";
const ORDER_STATUS = {
  0: "Pending",
  1: "Confirmed",
  2: "Cancelled",
  3: "Shipping",
  3: "Successful",
};

const OrderDetail = () => {
  const id = useParams().id;
  const { contract } = useEthersProvider() || {};

  const [orderDetails, setorderDetails] = useState();
  const [carts, setcarts] = useState();
  const [receiver, setreceiver] = useState();

  useEffect(() => {
    if (contract) {
      getOrderDetails(id);
    }
  }, [contract]);

  const getOrderDetails = async (id) => {
    try {
      const order_detail = await contract.getOrder(id);
      const cleanOrderDetail = {
        id: order_detail.id.toString(),
        buyer: order_detail.buyer,
        createdAt: formatBlockchainTimestamp(order_detail.createdAt),
        finalAmount: ethers.formatEther(order_detail.finalAmount).toString(),
        voucherAmount: ethers
          .formatEther(order_detail.voucherAmount)
          .toString(),
        inforUserCID: order_detail.inforUserCID,
        orderDetailCID: order_detail.orderDetailCID,
        status: ORDER_STATUS[order_detail.status],
      };

      const res_cart = await fetch(cleanOrderDetail.orderDetailCID);
      const res_receiver = await fetch(cleanOrderDetail.inforUserCID);
      const json_cart = await res_cart.json();
      const json_receiver = await res_receiver.json();

      setcarts(json_cart);
      setreceiver(json_receiver);

      setorderDetails(cleanOrderDetail);
    } catch (error) {
      alert("có lỗi");
      console.error(error);
    }
  };

  return (
    <div class="container mt-4">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">{`Chi tiết đơn hàng số ${id} của quý khách `}</h5>
        </div>

        {orderDetails && (
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label fw-bold">Mã đơn hàng:</label>
              <div>{orderDetails.id}</div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Người mua:</label>
              <div>{orderDetails.buyer}</div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Sản phẩm:</label>
              <div class="row g-3">
                {carts.map((cart, index) => (
                  <div class="col-12">
                    <div class="card border-light shadow-sm">
                      <div class="card-body">
                        <h6 class="card-title mb-1">{cart.product.name}</h6>
                        <p class="mb-0 text-muted">Số lượng: {cart.quantity}</p>
                        <p class="mb-0 text-muted">
                          Giá: {formatNumber(cart.totalmoney)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">
                Tổng số tiền voucher áp dụng:
              </label>
              <div>{orderDetails.voucherAmount} ETH</div>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">
                Tổng tiền sau khi đã áp dụng:
              </label>
              <div>{orderDetails.finalAmount} ETH</div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Thời gian đặt:</label>
              <div>{orderDetails.createdAt}</div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Thông tin đặt hàng:</label>
              <div>SĐT : {receiver.phone}</div>
              <div>
                Địa chỉ :{" "}
                {receiver.city +
                  "-" +
                  receiver.district +
                  "-" +
                  receiver.commune}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Trạng thái:</label>
              <div>
                <span class="badge bg-success">{orderDetails.status}</span>
              </div>
            </div>

            <div class="text-end mt-4">
              <a href="/Order" class="btn btn-secondary">
                Quay lại
              </a>
            </div>
          </div>
        )}
        {!orderDetails && <Loading />}
      </div>
    </div>
  );
};

export default OrderDetail;
