import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


const PrivateRoute = () => {
  const { authCookie, loading } = useAuth();
  //console.log(authCookie, "valor en el private route")
  if(loading) return <p>...Cargando</p>
  return authCookie ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
