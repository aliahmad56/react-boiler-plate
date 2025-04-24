import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import aiSignupImage from "../../../assets/aiSignupImage.jpg";
import Button from "../../../components/Button"
import { signup } from "../../../apis/auth.api";

import { signupValidationSchema } from "../../../utils/validationSchemas";
import { useState } from "react";

const Signup = () => {
  //add loader state
  const navigate = useNavigate();
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(true);

  const handleSignup = async (values) => {
    try {
      console.log("Formik object values are", values);

      const response = await signup(values);
      console.log("Signup Successful:", response);

      if (response?.status === 201 && response?.data.status === true) {
        toast.success(response.message || "User successfully signup");

        navigate("/verify-otp", { state: { email: values.email } });
      } else {
        toast.error(response.response.data.message || "Something went wrong"); //if error is thrown in api function
      }
    } catch (error) {
      toast.error(
        toast.error(response?.response.data.message || "Something went wrong")
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: handleSignup,
  });

  return (
    <div className="flex h-screen w-auto">
      {/* Background Image */}
      <img
        src={aiSignupImage}
        alt="Signup"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* bg-black/50 */}
      {/* Signup Form */}
      {isSignupFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-lg bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
            <div className="flex place-content-between p-4 pb-0 pl-6">
              <h2 className="text-2xl font-bold">Sign Up</h2>
              <button
                className="text-xl hover:text-red-500"
                onClick={() => setIsSignupFormVisible(false)}
              >
                ✕
              </button>
            </div>

            <p className="mb-8 text-sm text-zinc-400 pl-6">
              You must sign up to continue
            </p>
            <form onSubmit={formik.handleSubmit} className="px-16">
              {/* Name Field */}
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 p-2 w-full border rounded-md text-white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
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

              {/* Password Field */}
              <div className="mb-4 bg-text-zinc-400">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 p-2 w-full border rounded-md"
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

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button 
                  type="submit"
                  className="w-3/4 bg-white text-black py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
              >
                Continue with email
              </Button>
                  </div>

              <div className="text-center text-sm mt-5 text-white pb-3">
                <p className="cursor-pointer">
                  By continuing, you acknowledge that you (i) agree to the{" "}
                  <span
                    className="hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Terms of Service
                  </span>{" "}
                  and (ii) have read and understood our{" "}
                  <span
                    className="hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
