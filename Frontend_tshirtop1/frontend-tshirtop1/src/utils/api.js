import axios from 'axios';

// Construimos las URLs dinámicamente
//const API_URL_BACK = `http://${import.meta.env.VITE_API_API_GATEWAY_HOST}:${import.meta.env.VITE_API_API_GATEWAY_PORT}`;
const API_URL_AUTH = `http://${import.meta.env.VITE_API_HOST_AUTH_HOST}:${import.meta.env.VITE_API_HOST_AUTH_PORT}/protected`;
//const API_URL_RECOVERY = `http://${import.meta.env.VITE_API_HOST_RECOVERY_HOST}:${import.meta.env.VITE_API_HOST_RECOVERY_PORT}/recovery`;

export { API_URL_BACK, API_URL_AUTH, API_URL_RECOVERY };

/*export const back = axios.create({
  baseURL: API_URL_BACK,
  headers: { "Content-Type": "application/json" },
});*/

export const api = axios.create({
  baseURL: API_URL_AUTH,
  headers: { "Content-Type": "application/json" },
});

/*export const recovery = axios.create({
  baseURL: API_URL_RECOVERY,
  headers: { "Content-Type": "application/json" },
});*/

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers["Authorization"];
  }
};
