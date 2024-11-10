import axios from "axios";

const APP_API_URL = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
  baseURL: APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_APP_API_TOKEN;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    // console.log("response", response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
