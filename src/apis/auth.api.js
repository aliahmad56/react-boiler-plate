import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
let response;

export const signup = async () => {
  try {
    response = await axios.post(`${API_BASE_URL}/user/verify-otp`, body);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (values) => {
  try {
    console.log("values", values);
    response = await axios.post(`${API_BASE_URL}/user/login`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const sentOtp = async (values) => {
  try {
    response = await axios.post(`${API_BASE_URL}/user/send-otp`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (values) => {
  try {
    response = await axios.post(`${API_BASE_URL}/user/reset-password`, values);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const verifyOtp = async () => {
  try {
    response = await axios.post("/user/verify-otp", body);
    return response;
  } catch (error) {
    return error;
  }
};
