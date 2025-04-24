import { useState } from "react";
// import AuthContext from "../context/AuthContext";
import useAuthContext from "./useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  //Haya mula haya useAuthContext file no sawzem. Hamo ya file sawzem ya AuthContext direct import korom
  // const { dispatch } = AuthContext();
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  //   const login = async (token) => {
  const login = async (user) => {
    setError(null);
    setIsLoading(true);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
    setIsLoading(false);
  };

  return { login, error, isLoading };
};
