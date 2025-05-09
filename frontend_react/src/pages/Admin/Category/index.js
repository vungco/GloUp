import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";
import CreateForm from "./create";
import EditForm from "./edit";

function Category() {
  const [categories, setcategories] = useState(null);
  const [isShowFormCreate, setisShowFormCreate] = useState(false);
  const [isShowFormEdit, setisShowFormEdit] = useState(false);

  useEffect(() => {
    Getcategories();
  }, []);

  function Getcategories() {
    categoryApi
      .getAll()
      .then((response) => {
        setcategories(response.data);
      })
      .catch((error) => {
        console.error("có lỗi trong quá trình lấy dl: " + error);
      });
  }

  function Deletetable(id) {
    let getconfirm = window.confirm("bạn có thực sự muốn xóa nhóm này không ?");
    if (getconfirm) {
      categoryApi
        .delete(id)
        .then((response) => {
          alert("bạn đã xóa nhóm thành công");
          Getcategories();
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
            Getcategories={Getcategories}
          />
        )}
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Tên nhóm mỹ phẩm: </th>

            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setisShowFormEdit(category)}
                >
                  <i className="fa fa-edit"></i> Sửa
                </button>

                {isShowFormEdit.id == category.id && (
                  <>
                    <EditForm
                      setisShowFormEdit={setisShowFormEdit}
                      Getcategories={Getcategories}
                      data={{ name: category.name }}
                      id={category.id}
                    />
                  </>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => Deletetable(category.id)}
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

export default Category;
