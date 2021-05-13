import axios from "axios";
import { getCookie } from "./cookieHelper";

axios.interceptors.request.use((config) => {
  const authToken = getCookie("authorization");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});
