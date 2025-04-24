import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import aiSignupImage from "../../../assets/aiMusicVerifyOtp.jpg";
import Button from "../../../components/Button"
import { verifyOtp } from "../../../apis/auth.api";

import { verifyOtpValidationSchema } from "../../../utils/validationSchemas";

const VerifyOtp = () => {
  //add loader state
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from location state
  const email = location?.state?.email; // Correct way to pass data

  const handleVerifyOtp = async (values) => {
    try {
      console.log("Formik object values are", values);
      const response = await verifyOtp(values);
      console.log("verify otp Successful:", response);
      if (response?.status === 200 && response?.data?.status === true) {
        toast.success(response.message || "User successfully verify otp");

        navigate("/login");
      } else {
        toast.error(response?.data?.message || "Something went wrong");
        //if error is thrown in api function
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
      email: email || "",
    },
    validationSchema: verifyOtpValidationSchema,
    onSubmit: handleVerifyOtp,
  });

  return (
    <div className="flex h-screen w-full">
      {/* Left Section (Image) */}
      <div className="w-full flex items-center justify-center">
        <img
          src={aiSignupImage}
          alt="Signup"
          className="w-full h-full object-cover rounded-xl"
          //   style={{border-radius: "10px"}}
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 font-system-ui">
            Verify Otp
          </h2>
          <form onSubmit={formik.handleSubmit}>
            {/* OTP Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                name="otp"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp}
              />
              {formik.touched.otp && formik.errors.otp && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.otp}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
               type="submit"
               className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600"
              >
                Verify Otp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
