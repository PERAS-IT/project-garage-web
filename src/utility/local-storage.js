const ACCESS_TOKEN = "ACCESS_TOKEN";
const ACCESS_TOKEN_ADMIN = "ACCESS_TOKEN_ADMIN";

export const storeToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const clearToken = () => localStorage.clear(ACCESS_TOKEN);

export const storeTokenAdmin = (token) =>
  localStorage.setItem(ACCESS_TOKEN_ADMIN, token);
export const getTokenAdmin = () => localStorage.getItem(ACCESS_TOKEN_ADMIN);
export const clearTokenAdmin = () => localStorage.clear(ACCESS_TOKEN_ADMIN);
