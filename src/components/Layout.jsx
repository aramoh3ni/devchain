import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import SidebarCheck from "./Sidebar/Sidebar"
import CreateJobBox from "./Widgets/CreateJobBox"
import Sidebar from "./Sidebar"

const styles = {
  main: `bg-primary w-screen h-screen pt-[3.8rem] overflow-y-hidden`,
  sidebarWrapper: `hidden md:block fixed top-0 left-0  w-80 min-h-screen`,
  contentWrapper: `md:flex-auto px-3 pt-6 min-h-screen container m-auto`,
  widgetWrapper: `hidden md:block flex w-90 pt-20 px-4 min-h-screen border-l-default border-gray-600 `
}

const Layout = () => {
  return (
    <main role="main" className={styles.main}>
      <Navbar />
      <div className="flex">
        <Sidebar>
          <SidebarCheck />
        </Sidebar>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
        <Sidebar position="right">
          <CreateJobBox />
        </Sidebar>
      </div>
    </main>
  )
}

export default Layout
