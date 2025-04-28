import React, { useState, useEffect } from "react";
import AddReceiver from "./AddReceiver";
import UpdateReceiver from "./UpdateReceiver";
import receiverApi from "../../../api/receiverApi";

const Receiver = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormUpdateVisible, setIsFormUpdateVisible] = useState(false);
  const [style_receiverType, setStyle] = useState({
    cursor: "not-allowed",
    opacity: ".7",
  });
  const [style_noDelete, setdelete] = useState({ display: "none" });

  const [receivers, setreceivers] = useState(null);
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  const openForm = () => {
    setIsFormVisible(true);
  };

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false);
  };

  const openFormUpdate = (receiver) => {
    setIsFormUpdateVisible(true);
    setSelectedReceiver(receiver);
  };

  // Đóng form
  const closeFormUpdate = () => {
    setIsFormUpdateVisible(false);
  };

  useEffect(() => {
    GetReceivers();
  }, []);

  const GetReceivers = () => {
    receiverApi
      .getReceiversByUser()
      .then((response) => {
        setreceivers(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi khi cập nhật danh sách danh mục!");
      });
  };

  //
  const deleteReceiver = (receiverId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa địa chỉ này không?")) {
      receiverApi.delete(receiverId).then((response) => {
        alert("đã xóa thành công địa chỉ này");
        GetReceivers(); // Cập nhật lại danh sách sau khi xóa
      });
    }
  };

  const HandlesetDefault = (receiver) => {
    if (receiver.type == 0) {
      setDefault(receiver);
    }
  };

  const setDefault = (receiver) => {
    console.log(receiver);
    receiverApi
      .setTypeByReceiver(receiver.id)
      .then((response) => {
        // Gọi lại API để cập nhật danh sách địa chỉ sau khi thiết lập mặc định
        alert("đã thiết lập thành công");
        GetReceivers();
      })
      .catch((error) => {
        console.error("Lỗi khi thiết lập mặc định:", error);
      });
  };

  return (
    <div className="container mb-4 mt-4 pt-3">
      <div className="row mt-4 mb-4 pb-3 border-bottom border-3">
        <div className="col-10">
          <h6>Địa chỉ của tôi</h6>
        </div>
        <div className="col-2">
          <button
            onClick={() => openForm()}
            className="btn btn-outline-primary"
          >
            Thêm địa chỉ mới
          </button>
          {isFormVisible && (
            <>
              <div className="overlay1 active"></div> {/* Lớp overlay */}
              {isFormVisible && (
                <AddReceiver
                  onUpdate={GetReceivers}
                  onClose={closeForm}
                  setDefault={setDefault}
                />
              )}
            </>
          )}
        </div>
      </div>
      {receivers &&
        receivers.map((receiver) => (
          <div className="mt-4 row" key={receiver.id}>
            {/* Nội dung hiển thị cho từng địa chỉ */}
            <div className="col-md-10 col-12 fw-semibold text-capitalize fs-6">
              <p>
                <span className="me-3">{receiver.name}</span>
                <span className="">{receiver.phone}</span>
              </p>
              <p>
                {receiver.commune}, {receiver.district},{receiver.city}
              </p>
              <p>{receiver.dsc}</p>
              <p
                className="macd border rounded-2 p-2"
                style={{
                  color: "red",
                  display: receiver.type == 1 ? "inline-block" : "none",
                }}
              >
                Mặc định
              </p>
            </div>
            <div className="col-md-2">
              <div>
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => openFormUpdate(receiver)}
                >
                  Cập nhật
                </button>

                <button
                  className="btn btn-danger btn-sm rounded-2"
                  onClick={() => deleteReceiver(receiver.id)}
                  style={receiver.type == 1 ? style_noDelete : {}}
                >
                  Xóa
                </button>
              </div>
              <button
                className="btn btn-outline-secondary rounded-2 mt-2"
                onClick={() => HandlesetDefault(receiver)}
                style={receiver.type == 1 ? style_receiverType : {}}
              >
                Thiết lập mặc định
              </button>
            </div>
          </div>
        ))}
      {isFormUpdateVisible && (
        <>
          <div className="addoverlay"></div> {/* Lớp overlay */}
          {isFormUpdateVisible && selectedReceiver && (
            <UpdateReceiver
              onUpdate={GetReceivers}
              onClose={closeFormUpdate}
              setDefault={setDefault}
              receiver={selectedReceiver}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Receiver;
