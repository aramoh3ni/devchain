import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
const Layout = () => {
  return (
    <main role="main" className="bg-primary h-screen w-screen">
      <Navbar />

      <div className="flex gap-4 select-none container m-auto">
        <div className="flex-1 border-r-default border-gray-600"></div>
        <div className="flex-auto">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Layout
