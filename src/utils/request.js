import Axios from "axios";
import { getLocalStorage } from "./localStorage"; // Ensure this function is correctly defined

const AUTH_TOKEN = "Authorization";
const SERVER_API = import.meta.env.VITE_API_BASE_URL;

const axiosInterceptor = Axios.create({
  baseURL: SERVER_API,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInterceptor.interceptors.request.use(
  (req) => {
    try {
      const storedItem = getLocalStorage("token"); //Hamesha exact local storage ate key name haya pass kos
      if (storedItem) {
        const token = storedItem?.value;
        // const token = item?.value?.token

        req.headers[AUTH_TOKEN] = `Bearer ${token}`;
      } else {
        return Promise.reject(new Error("Missing access token")); //kia haya Error default class frontend d shera
      }
    } catch (error) {
      console.error("Error setting token in request:", error);
      return Promise.reject(error);
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
