import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import CreateForm from "./create";
import EditForm from "./edit";
import { formatNumber } from "../../../utils/formatNumber";
import { pathUrl } from "../../../utils/path";

function Product() {
  const [products, setproducts] = useState(null);
  const [isShowFormCreate, setisShowFormCreate] = useState(false);
  const [isShowFormEdit, setisShowFormEdit] = useState(false);

  useEffect(() => {
    Getproducts();
  }, []);

  function Getproducts() {
    productApi
      .getAll()
      .then((response) => {
        setproducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }

  function Deleteproduct(id) {
    let getconfirm = window.confirm(
      "bạn có thực sự muốn xóa sản phẩm này không ?"
    );
    if (getconfirm) {
      productApi
        .delete(id)
        .then((response) => {
          alert("bạn đã xóa sản phẩm thành công");
          Getproducts();
        })
        .catch((error) => {
          console.error("có lỗi trong quá trình xóa dl: " + error);
        });
    }
  }

  return (
    <div className="container mt-3 ">
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setisShowFormCreate(true)}
        >
          <i className="fa fa-plus"></i> Thêm
        </button>
        {isShowFormCreate && (
          <CreateForm
            setisShowFormCreate={setisShowFormCreate}
            Getproducts={Getproducts}
          />
        )}
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Tên nhóm</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Số lượng sản phẩm còn lại</th>
            <th>Tên nhà cung cấp</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.category?.name}</td>
              <td>{product.name}</td>
              <td>
                <img
                  style={{ width: "180px", height: "100px" }}
                  src={pathUrl(product.img)}
                  alt="Product Image"
                />
              </td>
              <td>{formatNumber(product.price)}</td>
              <td>{product.dsc}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setisShowFormEdit(product)}
                >
                  <i className="fa fa-edit"></i> Sửa
                </button>
                {isShowFormEdit.id == product.id && (
                  <EditForm
                    setisShowFormEdit={setisShowFormEdit}
                    Getproducts={Getproducts}
                    data={{
                      category_id: product.category.id,
                      category_name: product.category.name,
                      name: product.name,
                      dsc: product.dsc,
                      price: product.price,
                      quantity: product.quantity,
                      supplier_id: product.supplier.id,
                      supplier_name: product.supplier.name,
                    }}
                    id={product.id}
                  />
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => Deleteproduct(product.id)}
                >
                  <i className="fa fa-trash"></i> Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
