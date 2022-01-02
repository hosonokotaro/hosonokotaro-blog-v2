import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export const isAxiosError = (error: unknown) => {
  return axios.isAxiosError(error);
};

export default axiosInstance;
