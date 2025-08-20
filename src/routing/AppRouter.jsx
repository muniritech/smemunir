import React, { useEffect, useState } from "react";
import MiddleContainer from "../appComponents/MiddleContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../page/Login";
import { useSelector, useDispatch } from "react-redux";
import { toggaleAuth } from "../redux/slices/AuthSlice"

const AppRouter = () => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch()
  const isauth = useSelector((state) => state.auth.isAuth)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");
    if (isAuthenticated) {
       dispatch(toggaleAuth(true))
       setUser(true)
    }
  }, [dispatch]);
  return (
    <div className="h-full w-full overflow-hidden flex flex-1">
      {user ? (
        <MiddleContainer />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
