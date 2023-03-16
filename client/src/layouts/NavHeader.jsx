import React from 'react'
import { Outlet } from 'react-router-dom'


// estarán los botones inicio, historial y perfil
const NavHeader = () => {
  return (
    <div>
      Nav Header
      <Outlet />
    </div>
  )
}

export default NavHeader