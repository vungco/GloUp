import React, { useState, useEffect } from "react";
import "./style.css";
import AddReceiver from "./AddReceiver";
import UpdateReceiver from "./UpdateReceiver";
const setReceiver = [
  {
    receiver_id: 1,
    receiver_name: "vững",
    receiver_phone: "01982648281",
    receiver_city: "ha noi",
    receiver_district: "Liep tuyet",
    receiver_commune: "quoc oai",
    receiver_dsc: "xom giưa",
    receiver_type: 1,
  },
];

const Receiver = () => {
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormUpdateVisible, setIsFormUpdateVisible] = useState(false);
  const [style_receiverType, setStyle] = useState({
    cursor: "not-allowed",
    opacity: ".7",
  });
  const [style_noDelete, setdelete] = useState({ display: "none" });

  const [receiver, setData] = useState(setReceiver);
  const [userId, setUserId] = useState(null);

  const openForm = () => {
    setIsFormVisible(true);
  };

  // Đóng form
  const closeForm = () => {
    setIsFormVisible(false);
  };

  const openFormUpdate = () => {
    setIsFormUpdateVisible(true);
  };

  // Đóng form
  const closeFormUpdate = () => {
    setIsFormUpdateVisible(false);
  };

  useEffect(() => {
    // const userData = localStorage.getItem("user");
    // const parsedUser = JSON.parse(userData);
    // setUserId(parsedUser.user_id);
  }, []);

  useEffect(() => {
    // if (userId !== null) {
    //   axios
    //     .get(`${apiUrl}/api/users/${userId}/receivers`)
    //     .then((response) => {
    //       // Truy cập vào phần "data" của API trả về và đặt vào state
    //       setData(response.data.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data: ", error);
    //     });
    // }
  }, [userId]);

  const updateReceivers = () => {
    // axios.get(`${apiUrl}/api/users/${userId}/receivers`)
    // .then(response => {
    //     setData(response.data.data);
    // })
    // .catch(error => {
    //     console.error('Có lỗi khi cập nhật danh sách danh mục!');
    // });
  };

  //
  const deleteReceiver = (receiverId) => {
    // if (window.confirm('Bạn có chắc chắn muốn xóa địa chỉ này không?')) {
    //   axios.delete(`${apiUrl}/api/receivers/${receiverId}`)
    //     .then(response => {
    //         updateReceivers(); // Cập nhật lại danh sách sau khi xóa
    //     })
    // }
  };

  const HandlesetDefault = (receiver) => {
    // if(receiver.receiver_type == 0){
    //   setDefault(receiver);
    // }
  };

  const setDefault = (receiver) => {
    // if(userId!==null){
    //   axios.get(`${apiUrl}/api/users/${userId}/receivers/${receiver.receiver_id}/status`,)
    //   .then(response => {
    //       // Gọi lại API để cập nhật danh sách địa chỉ sau khi thiết lập mặc định
    //       updateReceivers();
    //   })
    //   .catch(error => {
    //     console.error('Lỗi khi thiết lập mặc định:', error);
    //   });
    // }
  };

  return (
    <div className="container mb-4 mt-4">
      <div className="row mt-4 sp_title mb-4">
        <div className="col-10">
          <h6>Địa chỉ của tôi</h6>
        </div>
        <div className="col-2">
          <button onClick={() => openForm()}>+ Thêm địa chỉ mới</button>
          {isFormVisible && (
            <>
              <div className="overlay active"></div> {/* Lớp overlay */}
              {isFormVisible && (
                <AddReceiver
                  onUpdate={updateReceivers}
                  onClose={closeForm}
                  setDefault={setDefault}
                  count_receiver={receiver}
                />
              )}
            </>
          )}
        </div>
      </div>
      <h6>Địa chỉ</h6>
      {receiver && receiver.length > 0 ? (
        receiver.map((item) => (
          <div className="mt-4 row" key={item.receiver_id}>
            {/* Nội dung hiển thị cho từng địa chỉ */}
            <div className="col-md-10 address col-12">
              <p>
                <span className="name">{item.receiver_name}</span>
                <span className="sđt">{item.receiver_phone}</span>
              </p>
              <p>{item.receiver_dsc}</p>
              <p>
                {item.receiver_commune}, {item.receiver_district},
                {item.receiver_city}
              </p>
              <p
                className="macd rounded-2"
                style={{
                  color: "red",
                  display: item.receiver_type == 1 ? "inline-block" : "none",
                }}
              >
                Mặc định
              </p>
            </div>
            <div className="col-md-2 sp-bt ">
              <div className="">
                <button
                  className="sp-bt_capnhat "
                  onClick={() => openForm(item.receiver_id)}
                >
                  Cập nhật
                </button>
                {isFormVisible && (
                  <>
                    <div className="addReceiver_overlay"></div>{" "}
                    {/* Lớp overlay */}
                    {isFormVisible && (
                      <UpdateReceiver
                        receiverId={selectedReceiverId}
                        onUpdate={updateReceivers}
                        onClose={closeForm}
                        setDefault={setDefault}
                        count_receiver={receiver}
                      />
                    )}
                  </>
                )}
                <button
                  className="sp-bt_capnhat"
                  onClick={() => deleteReceiver(item.receiver_id)}
                  style={item.receiver_type == 1 ? style_noDelete : {}}
                >
                  Xóa
                </button>
              </div>
              <button
                className="sp-bt_md rounded-2"
                onClick={() => HandlesetDefault(item)}
                style={item.receiver_type == 1 ? style_receiverType : {}}
              >
                Thiết lập mặc định
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Không có địa chỉ nào để hiển thị</p>
      )}
    </div>
  );
};

export default Receiver;
