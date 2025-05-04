import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateVoucherNFT() {
  const [voucher, setVoucher] = useState({
    name: "Summer Sale Voucher",
    website: "yourshop.com",
    description: "Giảm 15% cho đơn hàng từ 500K. Áp dụng đến hết 30/6/2025.",
    discountValue: 15,
    price: 0.05,
  });

  return (
    <div className="container text-light bg-dark p-4 rounded mt-4">
      <div className="row mb-4">
        {/* NFT Voucher Preview */}
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Voucher Preview"
            className="img-thumbnail mb-3"
          />
        </div>
        <div className="col-md-8">
          <h5>
            <strong>Voucher Name:</strong> {voucher.name}
          </h5>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${voucher.website}`}
              className="text-warning"
              target="_blank"
              rel="noreferrer"
            >
              {voucher.website}
            </a>
          </p>
          <p>
            <strong>Description:</strong> {voucher.description}
          </p>
          <p>
            <strong>Discount Value:</strong> {voucher.discountValue}%
          </p>
          <p>
            <strong>Price:</strong> {voucher.price} ETH
          </p>
        </div>
      </div>

      {/* Input Form */}
      <form>
        <div className="mb-3">
          <label className="form-label fw-bold text-warning">
            Voucher Name
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light"
            value={voucher.name}
            onChange={(e) => setVoucher({ ...voucher, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Website</label>
          <div className="input-group">
            <span className="input-group-text bg-warning text-dark">HTTP</span>
            <input
              type="text"
              className="form-control bg-dark text-light"
              value={voucher.website}
              onChange={(e) =>
                setVoucher({ ...voucher, website: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-warning">Description</label>
          <textarea
            rows="3"
            className="form-control bg-dark text-light"
            value={voucher.description}
            onChange={(e) =>
              setVoucher({ ...voucher, description: e.target.value })
            }
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold text-warning">
              Discount (%)
            </label>
            <input
              type="number"
              className="form-control bg-dark text-light"
              value={voucher.discountValue}
              onChange={(e) =>
                setVoucher({
                  ...voucher,
                  discountValue: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold text-warning">
              Price (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              className="form-control bg-dark text-light"
              value={voucher.price}
              onChange={(e) =>
                setVoucher({ ...voucher, price: parseFloat(e.target.value) })
              }
            />
          </div>
        </div>

        <button type="button" className="btn btn-warning">
          Create Voucher NFT
        </button>
      </form>
    </div>
  );
}

export default CreateVoucherNFT;
