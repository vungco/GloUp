// src/api/userApi.js
import axiosClient from "../utils/axiosClient";

const authUser = {
  logout() {
    return axiosClient.get("/logout");
  },
  get_user_id() {
    return axiosClient.get("/user/get_id");
  },
  login(data) {
    return axiosClient.post("user/login", data);
  },
  regester(data) {
    return axiosClient.post("/regester", data);
  },
};

export default authUser;
