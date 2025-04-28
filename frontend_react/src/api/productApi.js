// src/api/customerApi.js
import { apiUrl } from "../config";
import axiosClient from "../utils/axiosClient";
import axios from "axios";

const tableApi = {
  getAll(params) {
    return axiosClient.get("/products", { params });
  },

  getById(id) {
    return axiosClient.get(`/products/${id}`);
  },

  create(data) {
    return axiosClient.post("/products", data);
  },

  update(id, data) {
    return axiosClient.put(`/products/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/products/${id}`);
  },

  createByFormData(formdata) {
    return axios.post(`${apiUrl}/api/products`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Thêm token vào header
      },
    });
  },

  updateByFormData(formdata, id) {
    return axios.post(`${apiUrl}/api/products/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Thêm token vào header
      },
    });
  },
};

export default tableApi;
