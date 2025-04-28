import React, { useState, useEffect, useRef } from "react";
import receiverApi from "../../../api/receiverApi";

const UpdateReceiver = ({ onUpdate, onClose, setDefault, receiver }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const checkboxRef = useRef(null);

  const [user_id, setuser_id] = useState(null);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [district, setdistrict] = useState("");
  const [commune, setcommune] = useState("");
  const [dsc, setdsc] = useState("");
  const [type, settype] = useState(null);

  useEffect(() => {
    setuser_id(receiver.user_id);
    setname(receiver.name);
    setphone(receiver.phone);
    setcity(receiver.city);
    setdistrict(receiver.district);
    setcommune(receiver.commune);
    setdsc(receiver.dsc);
    settype(receiver.type);
  }, []);

  // Lấy danh sách Tỉnh khi component được load
  useEffect(() => {
    receiverApi
      .getprovinces()
      .then((response) => {
        setProvinces(response.results);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  // Lấy danh sách Huyện khi chọn Tỉnh
  const handleProvinceChange = (e) => {
    const province = JSON.parse(e.target.value);
    setcity(province.name);

    if (province) {
      receiverApi
        .getdistricts({ province: province.code })
        .then((response) => {
          setDistricts(response.results);
        })
        .catch((error) => {
          console.error("Error fetching districts:", error);
        });
    } else {
      setDistricts([]);
    }
  };

  // Lấy danh sách Xã khi chọn Huyện
  const handleDistrictChange = (e) => {
    const district = JSON.parse(e.target.value);
    setdistrict(district.name);

    if (district) {
      receiverApi
        .getcommunes({ district: district.code })
        .then((response) => {
          setCommunes(response.results);
        })
        .catch((error) => {
          console.error("Error fetching communes:", error);
        });
    } else {
      setCommunes([]);
    }
  };
  const handleCommuneChange = (e) => {
    const commune = JSON.parse(e.target.value);
    setcommune(commune.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      user_id,
      name,
      phone,
      city,
      district,
      commune,
      dsc,
      type: 0,
    };

    receiverApi
      .update(receiver.id, data)
      .then((response) => {
        alert("bạn đã sửa người nhận thành công");
        if (checkboxRef.current.checked) {
          setDefault(response.data);
        }
        console.log(response.data);
        onUpdate();
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="form-popup mt-3">
        <form onSubmit={handleSubmit}>
          <h5>Cập nhập địa chỉ</h5>
          <div
            className=" d-flex mt-3 form-popup1 profile"
            style={{ justifyContent: "space-between" }}
          >
            <input
              className=""
              type="text"
              placeholder="Họ tên"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
            <input
              className=""
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            ></input>
          </div>
          <div className="mt-3 form-popup2">
            <select
              class="form-control"
              value={city}
              onChange={handleProvinceChange}
            >
              <option hidden>{city}</option>
              {provinces.map((province) => (
                <option value={JSON.stringify(province)}>
                  {province.name}
                </option>
              ))}
            </select>
            <select
              class="form-control"
              value={district}
              onChange={handleDistrictChange}
            >
              <option hidden>{district}</option>

              {districts.map((district) => (
                <option value={JSON.stringify(district)}>
                  {district.name}
                </option>
              ))}
            </select>
            <select
              class="form-control"
              value={commune}
              onChange={handleCommuneChange}
            >
              <option hidden>{commune}</option>

              {communes.map((commune) => (
                <option value={JSON.stringify(commune)}>{commune.name}</option>
              ))}
            </select>
          </div>
          <div className=" mt-3 form-popup3">
            <input
              type="text"
              placeholder="Địa chỉ cụ thể"
              value={dsc}
              onChange={(e) => setdsc(e.target.value)}
            ></input>
          </div>

          <div className="d-flex mt-2 mb-2">
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue
              id="squareCheckbox"
              ref={checkboxRef}
              checked={type}
              onChange={() => settype(!type)}
            />
            Đặt làm địa chỉ mặc định
          </div>

          <button type="submit" className="btn btn-primary">
            Lưu
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Đóng
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateReceiver;
