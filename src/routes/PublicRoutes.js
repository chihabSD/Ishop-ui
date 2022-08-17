import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useRedux } from '../hooks/useRedux'
const PublicRoutes = () => {
  const {authenticated} = useRedux()
  return authenticated ? <Navigate to="/"/>:<Outlet  />
}

export default PublicRoutes