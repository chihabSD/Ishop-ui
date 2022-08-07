import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRedux } from "../hooks/useRedux";
import Login from "../pages/auth/Login";
const PrivateRoutes = ({ allowedRoles  }) => {
  const location = useLocation()
  const { authenticated, user  } = useRedux();

  return authenticated ? <Outlet /> :  <Navigate to="/login"  />

  // console.log(user.role === allowedRoles, user);
  // if (allowedRoles) {
  //   return authenticated ? (
  //     user.role === allowedRoles ? (
  //       <Outlet />
  //     ) : (
  //       <Navigate to="/denied" />
  //     )
  //   ) : (
  //     <Navigate to="/login" />
  //   );
  // }

  // return authenticated  ?
  // return authenticated ? (
  //   user.role === allowedRoles ? (
  //     <Outlet />
  //   ) : (
  //     <Navigate to="/unuthorised" />
  //   )
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default PrivateRoutes;
