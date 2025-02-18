import axios from 'axios';

// Construimos las URLs dinámicamente
const API_URL_AUTH = `http://${import.meta.env.VITE_API_HOST_AUTH_HOST}:${import.meta.env.VITE_API_HOST_AUTH_PORT}/protected`;

export { API_URL_AUTH };

export const api = axios.create({
  baseURL: API_URL_AUTH,
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers["Authorization"];
  }
};
