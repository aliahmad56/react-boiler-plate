import { Routes, Route } from "react-router-dom";

import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Singin";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import SendOtp from "../pages/Auth/SendOtp";
import ResetPassword from "../pages/Auth/ResetPassword";
import UserDashboard from "../pages/Home";
import Library from "../pages/Library";
import PrivateRoute from "./ProtectedRoute"; // Import PrivateRoute
import PublicRoute from "./PublicRoute"; // Import PublicRoute



const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (Accessible only if NOT logged in) */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-otp"
        element={
          <PublicRoute>
            <VerifyOtp />
          </PublicRoute>
        }
      />
      <Route
        path="/send-otp"
        element={
          <PublicRoute>
            <SendOtp />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />

      {/* Private Routes (Accessible only if logged in) */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/library"
        element={
          <PrivateRoute>
            <Library />
          </PrivateRoute>
        }
      />
   
    </Routes>
  );
};

export default AppRoutes;
