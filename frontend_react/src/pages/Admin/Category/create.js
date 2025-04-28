import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";

const CreateForm = ({ setisShowFormCreate, Getcategoryies }) => {
  const [CategoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      CategoryName,
    };
    categoryApi
      .create(data)
      .then((response) => {
        alert("bạn đã thêm nhóm thành công");
        Getcategoryies();
        setisShowFormCreate(false);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>{"Thêm dữ liệu"}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên nhóm: </label>
            <input
              type="text"
              className="form-control"
              value={CategoryName}
              onChange={(e) => setCategoryName(e.target.value)}
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
              setisShowFormCreate(false);
            }}
          >
            Hủy
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
