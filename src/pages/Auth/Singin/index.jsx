import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import aiSignupImage from "../../../assets/aiMusicImage.jpg";
import Button from "../../../components/Button"

import { loginUser } from "../../../apis/auth.api"; //current is relative import // try absolute import or path aliases

import { signinValidationSchema } from "../../../utils/validationSchemas";
import { setLocalStorage } from "../../../utils/localStorage";

import { useSignin } from "../../../hooks/useLogin";

const Signin = () => {
  const [isSigninFormVisible, setIsSigninFormVisible] = useState(true);
  //add loader state
  const navigate = useNavigate();
  const { login } = useSignin();

  const handleSignin = async (values) => {
    try {
      console.log("Formik object values are", values);
      const response = await loginUser(values);
      console.log("Signin Successful:", response);
      if (response?.status === 200 && response?.data?.status === true) {
        toast.success(response.message || "User successfully signin");
        setLocalStorage("token", response?.data?.accessToken);

        //store data through custom hook in authContext
        await login(JSON.stringify(response?.data?.user));

        navigate("/dashboard");
      } else {
        toast.error(response?.response?.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinValidationSchema,
    onSubmit: handleSignin,
  });

  return (
    <div className="flex h-screen w-full" style={{border: "2px solid red"}}>
      {/* Background Image */}
      <img
        src={aiSignupImage}
        alt="Signin"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Signin Form */}
      {isSigninFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-lg bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 pb-0 pl-6">
              <h2 className="text-2xl font-bold">Sign In</h2>
              <button
                className="text-2xl font-bold hover:text-red-500"
                onClick={() => setIsSigninFormVisible(false)}
              >
                 ✕
              </button>
            </div>

            <p className="mb-8 text-sm text-zinc-400 pl-6">
              You must sign in to continue
            </p>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className="px-16">
              {/* Email Field */}
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 w-full border rounded-md bg-transparent text-white"
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
              <div className="mb-4 text-zinc-400">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
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

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-3/4 bg-white text-black py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
                  // onClick={handleSignin} // if we direct call the function the we bypasses/missed Formik's validation.
                >
                  Continue with email
                </Button>
              </div>

              {/* Forgot Password */}
              <div className="text-center text-sm mt-5 text-blue-600 pb-3 text-zinc-400">
                <p
                  className="cursor-pointer underline"
                  onClick={() => navigate("/send-otp")}
                >
                  Forgot password?
                </p>
              </div>
              <div className="text-center text-sm mt-5 text-white pb-6">
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

export default Signin;
