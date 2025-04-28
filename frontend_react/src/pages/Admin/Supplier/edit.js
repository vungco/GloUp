import React, { useEffect, useState } from "react";
import supplierApi from "../../../api/supplierApi";

const EditForm = ({ setisShowFormEdit, Getsuppliers, data, id }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    setname(data.name);
    setemail(data.email);
    setphone(data.phone);
    setaddress(data.address);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      address,
    };
    supplierApi
      .update(id, data)
      .then((response) => {
        alert("bạn đã sua nha cung cap thành công");
        Getsuppliers();
        setisShowFormEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>{"Sửa dữ liệu"}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên nhà cung cấp </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email nhà cung cấp </label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Sđt nhà cung cấp </label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Địa chỉ nhà cung cấp </label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success me-2">
            Lưu
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setisShowFormEdit(false);
            }}
          >
            Hủy
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
