import { createContext, useReducer, useEffect, useContext } from "react";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorageItem,
} from "../utils/localStorage";

// Create AuthContext
const AuthContext = createContext();

// Initial Auth State
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

// Reducer Function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = getLocalStorage("token");
    const user = getLocalStorage("user");

    if (token && user) {
      dispatch({ type: "LOGIN", payload: { user, token } });
    }
  }, []);

  // Define login and logout functions
  const login = (user, token) => {
    setLocalStorage("token", token);
    setLocalStorage("user", user);
    dispatch({ type: "LOGIN", payload: { user, token } });
  };

  const logout = () => {
    removeLocalStorageItem("token");
    removeLocalStorageItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
