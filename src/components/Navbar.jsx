import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBell,
  faSun,
  faBars,
  faSquare,
  faLayerGroup,
  faUserAlt,
  faGears,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons"

const styles = {
  navbarWrapper: `fixed top-0 z-50 px-2 sm:px-4 py-2.5 w-full z-20 border-b-default border-gray-600 bg-primary`,
  navbarContainer: `flex flex-wrap items-center justify-between mx-auto`,
  navbarLogoImage: `h-6 mr-3 sm:h-9`,
  navbarLogoText: `self-center text-xl font-semibold whitespace-nowrap dark:text-white`,
  navbarButton: `hover:shadow-md rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
  navbarIconButton: `dark:bg-primary px-3.5 py-2 rounded-full hover:bg-blue-700 hover:shadow-md `,
  navbarLink: `p-2 px-3 font-semibold hover:bg-blue-600 focus-within:bg-lighter rounded-md`,
  navbarLinkActive: `p-2 px-3 font-semibold bg-blue-600 rounded-md`,
  navbarLinkIcon: `mr-2`,
}

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <div className="flex space-x-2">
          <NavLink to="/" className="flex items-center mr-4">
            {/* <img src="_https/index.html" className={styles.navbarLogoImage} alt="Developers Chain Logo" /> */}
            <span className={styles.navbarLogoText}>Developers Chain</span>
          </NavLink>
          <div className="hidden md:flex gap-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navbarLinkActive : `${styles.navbarLink}`
              }
              to="dashboard"
            >
              <FontAwesomeIcon
                icon={faPieChart}
                className={styles.navbarLinkIcon}
              />
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navbarLinkActive : `${styles.navbarLink}`
              }
              to="collections"
            >
              <FontAwesomeIcon
                icon={faLayerGroup}
                className={styles.navbarLinkIcon}
              />
              Jobs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navbarLinkActive : `${styles.navbarLink}`
              }
              to="jobs"
            >
              <FontAwesomeIcon
                icon={faGears}
                className={styles.navbarLinkIcon}
              />
              Setting
            </NavLink>
          </div>
        </div>

        <div className="flex gap-2">
          <button type="button" className={styles.navbarIconButton}>
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button type="button" className={styles.navbarIconButton}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <NavLink to="/checkpoint/sign-up" type="button" className={styles.navbarLinkActive}>
            <FontAwesomeIcon icon={faUserAlt} className={styles.navbarLinkIcon} />
            Create Account
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
