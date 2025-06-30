import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
console.log("🔗 API Base URL:", BASE_URL);
export default axiosInstance;
