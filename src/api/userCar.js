import axios from "../config/axios";

export const createCar = (formData) => axios.post("/cars", formData);
export const getAllCar = () => axios.get("/cars");
export const deleteCar = (id) => axios.patch(`/cars/${id}`);
export const requestServiceCar = (id, formData) =>
  axios.post(`/service/${id}`, formData);
export const editCar = (id, newProfileObj) =>
  axios.put(`/cars/${id}`, newProfileObj);
