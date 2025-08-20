import React from "react";
import { useDispatch } from "react-redux";
import {toggaleAuth} from "../redux/slices/AuthSlice"
const Login = () => {
 const dispatch = useDispatch()
  const onLogIn = () => {
    localStorage.setItem("authToken", "ryf78we572geh");
    dispatch(toggaleAuth(true))
  };
  return (
    <div
      className=" flex flex-1 h-full w-full items-center justify-center
    "
    >
      <div
        onClick={onLogIn}
        className="bg-black text-white w-fit px-5 py-2 rounded-lg cursor-pointer "
      >
        Login
      </div>
    </div>
  );
};

export default Login;
