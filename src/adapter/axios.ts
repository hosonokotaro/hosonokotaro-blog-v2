import axios from 'axios';

const baseURL = process.env.API_ENDPOINT;

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export default axiosInstance;
