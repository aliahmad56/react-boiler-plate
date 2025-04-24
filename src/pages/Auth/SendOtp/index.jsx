import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import sendOtpImage from "../../../assets/sendOtpImage.jpg";
import Button from "../../../components/Button";
import { sentOtp } from "../../../apis/auth.api";

import { sendOtpValidationSchema } from "../../../utils/validationSchemas";
import { useState } from "react";

const SendOtp = () => {
  //add loader state
  const [isSendOtpFormVisible, setIsSendOtpFormVisible] = useState(true);
  const navigate = useNavigate();

  const handleSendOtp = async (values) => {
    try {
      console.log("Formik object values are", values);

      const response = await sentOtp(values);
      console.log("Send Otp Successful:", response);
      if (response?.status === 200 && response?.data?.status === true) {
        toast.success(response.message || "Otp send successfully");

        navigate("/reset-password");
      } else {
        toast.error(response?.data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: sendOtpValidationSchema,
    onSubmit: handleSendOtp,
  });

  return (
    <div className="flex h-screen w-auto">
      <img
        src={sendOtpImage}
        alt="Send OTP"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {isSendOtpFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-lg bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
            <div className="flex place-content-between p-4 pb-0 pl-6">
              <h2 className="text-2xl font-bold">Send OTP</h2>
              <button onClick={() => setIsSendOtpFormVisible(false)}>✕</button>
            </div>
            <p className="mb-8 text-sm text-zinc-400 pl-6">
              Enter your email to receive an OTP
            </p>
            <form onSubmit={formik.handleSubmit} className="px-16">
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 w-full border rounded-md text-white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="flex justify-center mb-5">
                <Button
                type="submit"
                className="w-3/4 bg-white text-black py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
                >
                  Send Otp
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendOtp;
