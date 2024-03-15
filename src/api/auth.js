import axios from "../config/axios";
import axiosAdmin from "../config/axiosAdmin";

export const register = (user) => axios.post("/auth/register", user);
export const login = (credential) => axios.post("/auth/login", credential);
export const loginAdmin = (credential) =>
  axiosAdmin.post("/auth/login/admin", credential);
export const fetchMe = () => axios.get("/auth/me");

export const fetchAdmin = () => axiosAdmin.get("/auth/admin");
