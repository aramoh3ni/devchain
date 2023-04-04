import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const styles = {
  main: `bg-primary`,
  sidebarWrapper: `fixed top-0 left-0 z-40 w-80 min-h-screen pt-20 border-r-default border-gray-600`,
  contentWrapper: `pt-20 px-4 pb-4 sm:ml-80 min-h-screen`,
}

const Layout = () => {
  return (
    <main role="main" className={styles.main}>
      <Navbar />
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </main>
  )
}

export default Layout
