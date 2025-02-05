import axios from 'axios';

const API_URL_BACK = "http://localhost:8080";
const API_URL = "http://localhost:3002/protected";

export { API_URL_BACK, API_URL };

export const back = axios.create({
  baseURL: API_URL_BACK,  // Ahora usamos la variable correcta
  headers: { "Content-Type": "application/json" },
});

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers["Authorization"];
  }
};
