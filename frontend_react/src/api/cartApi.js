import axiosClient from "../utils/axiosClient";

const cartApi = {
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
};

export default cartApi;
