import axios from "axios";
import { getToken, getTokenAdmin } from "../utility/local-storage";

const axiosAdmin = axios.create();
axiosAdmin.defaults.baseURL = import.meta.env.VITE_API_URL;

axiosAdmin.interceptors.request.use(
  (config) => {
    const tokenAdmin = getTokenAdmin();
    if (tokenAdmin) {
      config.headers.Authorization = `Bearer ${tokenAdmin}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosAdmin;
