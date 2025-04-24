import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
