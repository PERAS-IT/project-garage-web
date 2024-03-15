import axios from "../config/axios";

export const createCar = (formData) => axios.post("/cars", formData);
export const getAllCar = () => axios.get("/cars");
export const deleteCar = (id) => axios.patch(`/cars/${id}`);
export const requestServiceCar = (id, data) =>
  axios.post(`/service/${id}`, data);
export const editCar = (id, data) => axios.put(`/cars/${id}`, data);

export const getHistoryByCarId = (id) => axios.get(`/cars/${id}`);
