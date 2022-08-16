import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRedux } from '../hooks/useRedux'
// import Login from '../pages/auth/Login'
const ProtectedUserRoutes = () => {
  const { user} = useRedux()
  // console.log('Useruser.user);
  return user.role === 'subscriber' ? <Outlet/>:<Navigate to="/user/history" />
}

export default ProtectedUserRoutes