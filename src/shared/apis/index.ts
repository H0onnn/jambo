import axios from "axios";

export const BASE_URL = "https://homework.jambo.works/api/v1";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});

export default api;
