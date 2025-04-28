import React, { useEffect, useState } from "react";
import userApi from "../../../api/userApi";
import CreateForm from "./create";
import EditForm from "./edit";

function User() {
  const [Users, setUsers] = useState(null);
  const [isShowFormCreate, setisShowFormCreate] = useState(false);
  const [isShowFormEdit, setisShowFormEdit] = useState(false);

  useEffect(() => {
    GetUsers();
  }, []);

  function GetUsers() {
    userApi
      .getAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function DeleteUser(id) {
    let getconfirm = window.confirm(
      "bạn có thực sự muốn xóa người dùng này không ?"
    );
    if (getconfirm) {
      userApi
        .delete(id)
        .then((response) => {
          alert("bạn đã xóa người dùng thành công");
          GetUsers();
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
        {isShowFormCreate ? (
          <CreateForm
            setisShowFormCreate={setisShowFormCreate}
            GetUsers={GetUsers}
          />
        ) : (
          ""
        )}
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {Users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setisShowFormEdit(user)}
                >
                  <i className="fa fa-edit"></i> Sửa
                </button>
                {isShowFormEdit.id == user.id ? (
                  <EditForm
                    setisShowFormEdit={setisShowFormEdit}
                    GetUsers={GetUsers}
                    data={{
                      name: user.name,
                      email: user.email,
                      role: user.role,
                    }}
                    id={user.id}
                  />
                ) : (
                  ""
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => DeleteUser(user.id)}
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

export default User;
