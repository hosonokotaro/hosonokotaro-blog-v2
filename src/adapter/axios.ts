import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export const isAxiosError = (error: unknown) => {
  return axios.isAxiosError(error);
};

export default axiosInstance;
