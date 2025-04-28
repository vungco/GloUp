// src/api/userApi.js
import axiosClient from "../utils/axiosClient";

const userApi = {
  getAll(params) {
    return axiosClient.get("/users", { params });
  },

  getById(id) {
    return axiosClient.get(`/users/${id}`);
  },

  create(data) {
    return axiosClient.post("/users", data);
  },

  update(id, data) {
    return axiosClient.put(`/users/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/users/${id}`);
  },
};

export default userApi;
