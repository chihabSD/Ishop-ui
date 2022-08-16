import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderUI from '../components/Header'

const NotFoundLayout = () => {
  return (
    <div>
        <HeaderUI  type={"Footer"}/>
        <Outlet />
    </div>
  )
}

export default NotFoundLayout