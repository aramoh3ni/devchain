import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import CreateJobBox from "./Widgets/CreateJobBox"

const styles = {
  main: `bg-primary`,
  sidebarWrapper: `fixed top-0 left-0  w-80 min-h-screen pt-16 border-r-default border-gray-600`,
  contentWrapper: `pt-20 px-4 pb-4 sm:ml-80 min-h-screen flex-auto`,
}

const Layout = () => {
  return (
    <main role="main" className={styles.main}>
      <Navbar />
      <div className="flex">
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
        <div className="flex-initial pt-20 px-4 min-h-screen border-l-default border-gray-600">
          <CreateJobBox />
        </div>
      </div>
    </main>
  )
}

export default Layout
