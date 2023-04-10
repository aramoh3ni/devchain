import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import SidebarCheck from "./Sidebar/Sidebar"
import CreateJobBox from "./Widgets/CreateJobBox"
import Sidebar from "./Sidebar"

const styles = {
  main: `bg-primary  min-h-screen pt-[3.8rem] overflow-y-hidden`,
  sidebarWrapper: `hidden md:block fixed top-0 left-0  w-80 min-h-screen fixed top-0`,
  contentWrapper: `md:flex-auto px-3 pt-6 py-6 m-auto container `,
  widgetWrapper: `hidden md:block flex w-90 pt-20 px-4 min-h-screen border-l-default border-gray-600 `
}

const Layout = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <main role="main" className={styles.main}>
      <Navbar onSidebarChange={() => setSidebar(!sidebar)} />
       <div className="flex">
        {sidebar && <Sidebar>
          <SidebarCheck />
        </Sidebar> }
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
    
        {/* <Sidebar position="right">
          <CreateJobBox />
        </Sidebar> */}
      </div>
    </main>
  )
}

export default Layout
