import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AddReceiver = ({ onUpdate, onClose, setDefault, count_receiver }) => {
  const [userId, setUserId] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const type = 0;
  const checkboxRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceiver({
      ...receiver,
      [name]: value,
    });
  };

  // Lấy danh sách Tỉnh khi component được load
  useEffect(() => {
    axios
      .get("https://api.mysupership.vn/v1/partner/areas/province")
      .then((response) => {
        setProvinces(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  // Lấy danh sách Huyện khi chọn Tỉnh
  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    const provinceName = provinces.find(
      (province) => province.code === e.target.value
    );
    setSelectedProvince(provinceName.name);

    setSelectedDistrict(""); // Reset huyện
    setCommunes([]); // Reset xã

    setReceiver({
      ...receiver,
      receiver_city: provinceName.name,
    });

    if (provinceId) {
      axios
        .get("https://api.mysupership.vn/v1/partner/areas/district", {
          params: { province: provinceId },
        })
        .then((response) => {
          setDistricts(response.data.results);
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
    const districtId = e.target.value;
    const districtName = districts.find(
      (district) => district.code === e.target.value
    );
    setSelectedDistrict(districtName.name);
    setReceiver({
      ...receiver,
      receiver_district: districtName.name,
    });

    if (districtId) {
      axios
        .get("https://api.mysupership.vn/v1/partner/areas/commune", {
          params: { district: districtId },
        })
        .then((response) => {
          setCommunes(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching communes:", error);
        });
    } else {
      setCommunes([]);
    }
  };
  const handleCommuneChange = (e) => {
    const communeId = e.target.value;
    const communeName = communes.find(
      (commune) => commune.code === e.target.value
    );
    setSelectedCommune(communeName.name);
    setReceiver({
      ...receiver,
      receiver_commune: communeName.name,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
  };
  return (
    <>
      <div className="form-popup mt-3">
        <form onSubmit={handleSubmit}>
          <h5>Địa chỉ mới</h5>
          <div
            className=" d-flex mt-3 form-popup1 profile"
            style={{ justifyContent: "space-between" }}
          >
            <input
              className=""
              type="text"
              placeholder="Họ tên"
              name="receiver_name"
              value={receiver.receiver_name}
              onChange={handleChange}
            ></input>
            <input
              className=""
              type="text"
              placeholder="Số điện thoại"
              name="receiver_phone"
              value={receiver.receiver_phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mt-3 form-popup2">
            <select
              id="city"
              name="receiver_city"
              class="form-control"
              value={selectedProvince}
              onChange={handleProvinceChange}
            >
              <option value={receiver.receiver_city} disabled selected>
                {receiver.receiver_city}
              </option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
            <select
              id="city"
              name="receiver_district"
              class="form-control"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value={receiver.receiver_district} disabled selected>
                {receiver.receiver_district}
              </option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
            <select
              id="city"
              name="receiver_commune"
              class="form-control"
              value={selectedCommune}
              onChange={handleCommuneChange}
            >
              <option value={receiver.receiver_commune} disabled selected>
                {receiver.receiver_commune}
              </option>
              {communes.map((commune) => (
                <option key={commune.code} value={commune.code}>
                  {commune.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" mt-3 form-popup3">
            <input
              type="text"
              placeholder="Địa chỉ cụ thể"
              name="receiver_dsc"
              value={receiver.receiver_dsc}
              onChange={handleChange}
            ></input>
          </div>

          <div className="bt-them">
            <button>+ Thêm vị trí</button>
          </div>

          <div className="d-flex">
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue
              id="squareCheckbox"
              ref={checkboxRef}
              style={
                receiver.receiver_type == 1 || count_receiver == null
                  ? { display: "none" }
                  : {}
              }
            />
            <p
              style={
                receiver.receiver_type == 1 || count_receiver == null
                  ? { display: "none" }
                  : {}
              }
            >
              Đặt làm địa chỉ mặc định
            </p>
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

export default AddReceiver;
