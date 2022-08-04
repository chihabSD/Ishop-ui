import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRedux } from '../hooks/useRedux'
import Login from '../pages/auth/Login'
const PrivateRoutes = () => {
  const {authenticated} = useRedux()
  return authenticated ? <Outlet/>:<Login />
}

export default PrivateRoutes