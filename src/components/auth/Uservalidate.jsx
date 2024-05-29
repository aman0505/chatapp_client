import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Uservalidate = ({ children, user, redirect }) => {
  if (!user) {
    return <Navigate to={redirect} />
  }

  return children ? children : <Outlet />
}

export default Uservalidate