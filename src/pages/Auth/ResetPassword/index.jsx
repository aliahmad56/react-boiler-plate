import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import resetPasswordImage from "../../../assets/resetPasswordImage.jpeg";
import Button from "../../../components/Button"

import { resetPassword } from "../../../apis/auth.api";

import { resetPasswordValidationSchema } from "../../../utils/validationSchemas";

import { useState } from "react";

const ResetPassword = () => {
  //add loader state
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const navigate = useNavigate();

  const handleResetPassword = async (values) => {
    try {
      console.log("Formik object values are", values);
      const resetPasswordObject = {
        password: values.password,
        otp: values.otp,
      };
      const response = await resetPassword(resetPasswordObject);
      console.log("Reset password Successful:", response);
      if (response?.status === 200 && response?.data?.status === true) {
        toast.success(response.message || "Password is reset successfully");

        navigate("/login");
      } else {
        toast.error(
          response?.response?.data?.message || "Something went wrong"
        );
      }
    } catch (error) {
      toast.error(error?.response?.response.data?.message || error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: "", 
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: handleResetPassword,
  });

  return (
    <div className="flex h-screen w-full">
      {/* Background Image */}
      <img
        src={resetPasswordImage}
        alt="Reset Password"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Reset Password Form */}
      {isFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-lg bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-4 pb-0 pl-6">
              <h2 className="text-2xl font-bold">Reset Password</h2>
              <button
                className="text-xl hover:text-red-500"
                onClick={() => setIsFormVisible(false)}
              >
                ✕
              </button>
            </div>

            <p className="mb-8 text-sm text-zinc-400 pl-6">
              Enter your OTP and new password
            </p>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className="px-16">
              {/* OTP Field */}
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">Enter OTP</label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  className="mt-1 p-2 w-full border rounded-md bg-transparent text-white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.otp}
                />
                {formik.touched.otp && formik.errors.otp && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.otp}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  className="mt-1 p-2 w-full border rounded-md bg-transparent text-white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="mt-1 p-2 w-full border rounded-md bg-transparent text-white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-3/4 bg-white text-black py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
                >
                  Reset Password
                </Button>
              </div>

              {/* Back to Login */}
              <div className="text-center text-sm mt-5 text-blue-600 pb-6 text-zinc-400">
                <p
                  className="cursor-pointer underline"
                  onClick={() => navigate("/login")}
                >
                  Back to Login
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
