// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://220.85.169.165:8084',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
