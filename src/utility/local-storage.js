const ACCESS_TOKEN = "ACCESS_TOKEN";

export const storeToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const clearToken = () => localStorage.clear(ACCESS_TOKEN);
