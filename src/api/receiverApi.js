import axiosClient from "../utils/axiosClient";

const receiverApi = {
  getAll(params) {
    return axiosClient.get("/carts", { params });
  },

  getById(id) {
    return axiosClient.get(`/carts/${id}`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post("/carts", data);
  },

  update(id, data) {
    return axiosClient.put(`/carts/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/carts/${id}`);
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
