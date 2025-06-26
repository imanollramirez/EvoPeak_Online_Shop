import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


const PrivateRoute = () => {
  const { authCookie } = useAuth();

  return authCookie ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
