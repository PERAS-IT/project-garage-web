import axios from "../config/axios";

export const updateRequestService = (orderId) =>
  axios.patch(`/admin/receive/${orderId}`);

export const updateService = (orderId) =>
  axios.patch(`/admin/service/${orderId}`);

export const updateComplete = (orderId) =>
  axios.patch(`/admin/complete/${orderId}`);

export const getRequestList = () => axios.get("/admin/getAllRequestList");
export const getServiceList = () => axios.get("/admin/getAllServiceList");
export const getCompleteList = () => axios.get("/admin/getAllCompleteList");

export const getRequestInSevenDay = () =>
  axios.get("/admin/getRequestInSevenDay");
export const getServiceInSevenDay = () =>
  axios.get("/admin/getServiceInSevenDay");
export const getCompleteInSevenDay = () =>
  axios.get("/admin/getCompleteInSevenDay");
