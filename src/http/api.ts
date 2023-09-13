import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add headers and options to the request
    config.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    config.headers["Content-Type"] = "application/json";
    config.timeout = 10000;
    return config;
  },
  (error: AxiosError) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default apiClient;
