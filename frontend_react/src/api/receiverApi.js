import axiosClient from "../utils/axiosClient";

const receiverApi = {
  getAll(params) {
    return axiosClient.get("/receivers", { params });
  },

  getById(id) {
    return axiosClient.get(`/receivers/${id}`);
  },

  getReceiversByUser() {
    return axiosClient.get(`/user/receivers`);
  },
  getReceiverDefault() {
    return axiosClient.get(`/receiver/type`);
  },

  create(data) {
    return axiosClient.post("/receivers", data);
  },

  update(id, data) {
    return axiosClient.put(`/receivers/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/receivers/${id}`);
  },
  setTypeByReceiver(id) {
    return axiosClient.get(`/receiver/${id}/setType`);
  },

  getprovinces() {
    return axiosClient.get(
      "https://api.mysupership.vn/v1/partner/areas/province"
    );
  },

  getdistricts(params) {
    return axiosClient.get(
      "https://api.mysupership.vn/v1/partner/areas/district",
      { params }
    );
  },

  getcommunes(params) {
    return axiosClient.get(
      "https://api.mysupership.vn/v1/partner/areas/commune",
      { params }
    );
  },
};

export default receiverApi;
