import axios from "axios";
import { config } from "./Constants";
//apply base url for axios

const REACT_APP_URL = config.url.API_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  if (config.config && config.config.id) url = url + "/" + config.config.id;

  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function post(url, data) {
  return await axiosApi
    .post(url, {
      ...data,
    })
    .then((response) => response.data);
}
