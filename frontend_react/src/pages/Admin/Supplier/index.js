import React, { useEffect, useState } from "react";
import supplierApi from "../../../api/supplierApi";
import CreateForm from "./create";
import EditForm from "./edit";

function Supplier() {
  const [suppliers, setsuppliers] = useState(null);
  const [isShowFormCreate, setisShowFormCreate] = useState(false);
  const [isShowFormEdit, setisShowFormEdit] = useState(false);

  useEffect(() => {
    Getsuppliers();
  }, []);

  function Getsuppliers() {
    supplierApi
      .getAll()
      .then((response) => {
        setsuppliers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function Deletetable(id) {
    let getconfirm = window.confirm(
      "bạn có thực sự muốn xóa nhà cung cấp này không ?"
    );
    if (getconfirm) {
      supplierApi
        .delete(id)
        .then((response) => {
          alert("bạn đã xóa nhà cung cấp thành công");
          Getsuppliers();
        })
        .catch((error) => {
          console.error(error);
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
            Getsuppliers={Getsuppliers}
          />
        )}
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Tên nhà cung cấp</th>

            <th>Email nhà cung cấp</th>
            <th>Số điện thoại nhà cung cấp</th>
            <th>Địa chỉ nhà cung cấp</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {suppliers?.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.address}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setisShowFormEdit(supplier)}
                >
                  <i className="fa fa-edit"></i> Sửa
                </button>

                {isShowFormEdit.id == supplier.id && (
                  <>
                    <EditForm
                      setisShowFormEdit={setisShowFormEdit}
                      Getsuppliers={Getsuppliers}
                      data={{
                        name: supplier.name,
                        email: supplier.email,
                        phone: supplier.phone,
                        address: supplier.address,
                      }}
                      id={supplier.id}
                    />
                  </>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => Deletetable(supplier.id)}
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

export default Supplier;
