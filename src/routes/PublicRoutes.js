import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useRedux } from '../hooks/useRedux'
import Home from '../pages/Home'
const PublicRoutes = () => {
  const {authenticated} = useRedux()
  return authenticated ? <Navigate to="/"/>:<Outlet  />
}

export default PublicRoutes