import { data } from "autoprefixer";
import axios from "../config/axios";
import axiosAdmin from "../config/axiosAdmin";

export const updateRequestService = (orderId) =>
  axiosAdmin.patch(`/admin/receive/${orderId}`);

export const updateService = (orderId) =>
  axiosAdmin.patch(`/admin/service/${orderId}`);

export const updateComplete = (orderId) =>
  axiosAdmin.patch(`/admin/complete/${orderId}`);

export const updateReject = (orderId) =>
  axiosAdmin.patch(`/admin/reject/${orderId}`);

export const createHistory = (orderId, data) =>
  axiosAdmin.post(`/admin/history/${orderId}`, data);

export const getRequestList = () => axiosAdmin.get("/admin/getAllRequestList");
export const getServiceList = () => axiosAdmin.get("/admin/getAllServiceList");
export const getCompleteList = () =>
  axiosAdmin.get("/admin/getAllCompleteList");

export const getRequestInSevenDay = () =>
  axiosAdmin.get("/admin/getRequestInSevenDay");
export const getServiceInSevenDay = () =>
  axiosAdmin.get("/admin/getServiceInSevenDay");
export const getCompleteInSevenDay = () =>
  axiosAdmin.get("/admin/getCompleteInSevenDay");

// get list order
export const searchListOrder = (startDate, endDate) =>
  axiosAdmin.get(`/admin/${startDate}/${endDate}`);

export const updateStatusOrder = (id, data) =>
  axiosAdmin.patch(`/admin/${id}`, data);

// get  list history
export const getListHistory = (startDate, endDate) =>
  axiosAdmin.get(`/history/${startDate}/${endDate}`);

export const updateHistory = (id, data) => {
  axiosAdmin.patch(`/history/${id}`, data);
};
