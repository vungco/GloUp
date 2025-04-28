// src/api/customerApi.js
import axiosClient from "../utils/axiosClient";

const tableApi = {
  getAll(params) {
    return axiosClient.get("/suppliers", { params });
  },

  getById(id) {
    return axiosClient.get(`/suppliers/${id}`);
  },

  create(data) {
    return axiosClient.post("/suppliers", data);
  },

  update(id, data) {
    return axiosClient.put(`/suppliers/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/suppliers/${id}`);
  },
};

export default tableApi;
