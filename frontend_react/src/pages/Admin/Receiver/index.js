import React, { useEffect, useState } from "react";
import receiverApi from "../../../api/receiverApi";
import CreateForm from "./create";
import EditForm from "./edit";

function Receiver() {
  const [receivers, setreceivers] = useState(null);
  const [isShowFormCreate, setisShowFormCreate] = useState(false);
  const [isShowFormEdit, setisShowFormEdit] = useState(false);

  useEffect(() => {
    Getreceivers();
  }, []);

  function Getreceivers() {
    receiverApi
      .getAll()
      .then((response) => {
        setreceivers(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }

  function Deletetable(id) {
    let getconfirm = window.confirm("bạn có thực sự muốn xóa nhóm này không ?");
    if (getconfirm) {
      receiverApi
        .delete(id)
        .then((response) => {
          alert("bạn đã xóa nhóm thành công");
          Getreceivers();
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
            Getreceivers={Getreceivers}
          />
        )}
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Tên tài khoản </th>
            <th>Tên người nhận </th>
            <th>Số điện thoại </th>
            <th>Thành phố </th>
            <th>Quận/Huyện </th>
            <th>Thị xã </th>
            <th>Chú thích </th>
            <th>Loại địa chỉ </th>

            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {receivers?.map((receiver) => (
            <tr key={receiver.id}>
              <td>{receiver.user.name}</td>
              <td>{receiver.name}</td>
              <td>{receiver.phone}</td>
              <td>{receiver.city}</td>
              <td>{receiver.district}</td>
              <td>{receiver.commune}</td>
              <td>{receiver.dsc}</td>
              <td>{receiver.type == 1 ? "mặc định" : "bình thường"}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setisShowFormEdit(receiver)}
                >
                  <i className="fa fa-edit"></i> Sửa
                </button>

                {isShowFormEdit.id == receiver.id && (
                  <>
                    <EditForm
                      setisShowFormEdit={setisShowFormEdit}
                      Getreceivers={Getreceivers}
                      data={{ name: receiver.name }}
                      id={receiver.id}
                    />
                  </>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => Deletetable(receiver.id)}
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

export default Receiver;
