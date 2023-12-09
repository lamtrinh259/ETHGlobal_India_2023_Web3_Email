// utils/axios.js
import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:8000", // Your API base URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need here
  },
});

export default axiosConfig;
