import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);
export const login = (credential) => axios.post("/auth/login", credential);
export const loginAdmin = (credential) =>
  axios.post("/auth/login/admin", credential);
export const fetchMe = () => axios.get("/auth/Me");
