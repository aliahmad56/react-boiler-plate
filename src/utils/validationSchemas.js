import * as Yup from "yup";


export const signupValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  export const resetPasswordValidationSchema = Yup.object({
    otp: Yup.string()
    .required("OTP is required")
    .length(6, "OTP must be exactly 6 digits"), // Optional: adjust OTP length
    
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  export const sendOtpValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  export const signinValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  });
  

  export const verifyOtpValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    otp: Yup.string()
      .min(6, "Otp must be at least 6 characters")
      .required("Otp is required"),
  });

  

  


