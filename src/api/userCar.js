import axios from "../config/axios";

export const createCar = (formData) => axios.post("/cars", formData);
export const getAllCar = () => axios.get("/cars");
