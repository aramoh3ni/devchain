import CreateJobBox from "./Widgets/CreateJobBox"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPieChart, faInbox } from "@fortawesome/free-solid-svg-icons"

const styles = {
  sidebarWrapper: `px-3 pb-4 overflow-y-auto`,
  sidebarListContainer: `space-y-2 mt-4`,
  sidebarListItem: ``,
  sidebarLink: `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`,
  sidebarLinkIcon: `w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
  sidebarLinkText: `flex-1 ml-3 whitespace-nowrap`,
  sidebarLinkBadge: `inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300`
}

const Sidebar = () => (
    <div className={styles.sidebarWrapper}>
      <CreateJobBox />

      <ul className={styles.sidebarListContainer}>
        <li>
          <a href="#" className={styles.sidebarLink}>
            <FontAwesomeIcon icon={faPieChart} className={styles.sidebarLinkIcon}/>
            <span className={styles.sidebarLinkText}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.sidebarLink}>
            <FontAwesomeIcon icon={faInbox} className={styles.sidebarLinkIcon}/>
            <span className={styles.sidebarLinkText}>Inbox</span>
            <span className={styles.sidebarLinkBadge}>3</span>
          </a>
        </li>
      </ul>

    </div>
)

export default Sidebar