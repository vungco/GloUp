import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";

const EditForm = ({ setisShowFormEdit, Getcategories, data, id }) => {
  const [CategoryName, setCategoryName] = useState("");

  useEffect(() => {
    setCategoryName(data.name);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      CategoryName,
    };
    categoryApi
      .update(id, data)
      .then((response) => {
        alert("bạn đã sua nhóm thành công");
        Getcategories();
        setisShowFormEdit(false);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>{"Sửa dữ liệu"}</h4>
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
