import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRedux } from "../hooks/useRedux";
import Login from "../pages/Auth/Login";
const PrivateRoutes = ({ allowedRoles }) => {
  const location = useLocation();
  const { authenticated, user } = useRedux();

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
