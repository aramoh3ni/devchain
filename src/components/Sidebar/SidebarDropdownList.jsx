import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const styles = {
  sidebarDropdownListButton: `flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`,
  sidebarDropdownListTitle: `flex-1 text-left whitespace-nowrap font-semibold text-gray-900 dark:text-white`,
  sidebarDropdownListLink: `w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-secondary`,
  sidebarDropdownListLinkIcon: `w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
}

const SidebarDropdownList = ({ isDropDropOpen, title, children }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <button
        type="button"
        className={styles.sidebarDropdownListButton}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span
          className={styles.sidebarDropdownListTitle}
        >
          {title ?? ""}
        </span>
        <FontAwesomeIcon icon={!showMenu ? faMinus : faPlus }  />
      </button>

      {<ul className={`${showMenu ? "hidden" : ""}`}>
        {children}
      </ul>}
    </>
  )
}

export default SidebarDropdownList
