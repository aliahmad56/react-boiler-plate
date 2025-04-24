import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("token"); // Check if user is logged in
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
