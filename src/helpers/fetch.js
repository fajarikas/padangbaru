import axios from "axios";

const APP_API_URL = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
  baseURL: APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://padang-baru-frontend.vercel.app",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
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
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
