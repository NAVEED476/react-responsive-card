import React from 'react'

import {Outlet} from "react-router-dom"
import Navbar from './Navbar'

const NavbarRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default NavbarRoutes