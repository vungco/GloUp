import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import categoryApi from "../../../api/categoryApi";
import supplierApi from "../../../api/supplierApi";
import axios from "axios";

const EditForm = ({ setisShowFormEdit, Getproducts, data, id }) => {
  const [category_id, setcategory_id] = useState("");
  const [category_name, setcategory_name] = useState("");
  const [name, setname] = useState("");
  const [dsc, setdsc] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [file, setfile] = useState(null);
  const [supplier_id, setsupplier_id] = useState("");
  const [supplier_name, setsupplier_name] = useState("");

  const [categories, setcategories] = useState();
  const [suppliers, setsuppliers] = useState();

  useEffect(() => {
    setcategory_id(data.category_id);
    setcategory_name(data.category_name);
    setname(data.name);
    setdsc(data.dsc);
    setprice(data.price);
    setsupplier_id(data.supplier_id);
    setsupplier_name(data.supplier_name);
    setquantity(data.quantity);

    categoryApi
      .getAll()
      .then((response) => {
        setcategories(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });

    supplierApi
      .getAll()
      .then((response) => {
        setsuppliers(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    // Append dữ liệu sản phẩm
    formdata.append("category_id", category_id);
    formdata.append("name", name);
    formdata.append("dsc", dsc);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("supplier_id", supplier_id);

    if (file) {
      formdata.append("image", file);
    }

    // Laravel cần `_method=PUT` khi gửi bằng formdata
    formdata.append("_method", "PUT");

    productApi
      .updateByFormData(formdata, id)
      .then((response) => {
        alert("bạn đã sửa sản phẩm thành công");
        Getproducts();
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
            <label className="form-label">Nhóm sản phẩm: </label>
            <select
              onChange={(e) => setcategory_id(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "1px solid black",
              }}
            >
              <option value={category_id} hidden>
                {category_name}
              </option>
              {categories?.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Chọn ảnh sản phẩm</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mô tả sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={dsc}
              onChange={(e) => setdsc(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Số lượng sản phẩm còn lại</label>
            <input
              type="text"
              className="form-control"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nhà cung cáp sản phẩm: </label>
            <select
              onChange={(e) => setsupplier_id(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "1px solid black",
              }}
            >
              <option value={supplier_id} hidden>
                {supplier_name}
              </option>
              {suppliers?.map((supplier) => (
                <option value={supplier.id}>{supplier.name}</option>
              ))}
            </select>
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
