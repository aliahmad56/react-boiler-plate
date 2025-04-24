import axios from "axios";
import axiosInterceptor from "../utils/request";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
let response;

export const activeUserList = async () => {
  try {
    response = await axiosInterceptor.get(`${API_BASE_URL}/user`);
    return response;
  } catch (error) {

    return error;
  }
};
