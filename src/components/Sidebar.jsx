import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPieChart, faInbox } from "@fortawesome/free-solid-svg-icons"

const styles = {
  sidebarWrapper: `px-3 overflow-y-auto select-none`,
  sidebarListContainer: `space-y-2 my-4`,
  sidebarListTitle: `mb-4 font-semibold text-gray-900 dark:text-white`,
  sidebarLink: `w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-secondary`,
  sidebarLinkIcon: `w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
  sidebarLinkText: `flex-1 ml-3 whitespace-nowrap`,
  sidebarLinkBadge: `inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-600 dark:text-gray-100`,
  sidebarLinkCheckBox: `w-4 h-4 text-blue-600 bg-none border-gray-300 rounded`,
}

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>

      <ul className={styles.sidebarListContainer}>
        <h3 className={styles.sidebarListTitle}>Pages</h3>
        <li>
          <a href="#" className={styles.sidebarLink}>
            <FontAwesomeIcon
              icon={faPieChart}
              className={styles.sidebarLinkIcon}
            />
            <span className={styles.sidebarLinkText}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.sidebarLink}>
            <FontAwesomeIcon
              icon={faInbox}
              className={styles.sidebarLinkIcon}
            />
            <span className={styles.sidebarLinkText}>Inbox</span>
            <span className={styles.sidebarLinkBadge}>3</span>
          </a>
        </li>
      </ul>
      <hr className="h-[1px] my-4 bg-gray-600 border-0 dark:bg-gray-600" />
      <ul className={styles.sidebarListContainer}>
        <h3 className={styles.sidebarListTitle}>Filter by Categories</h3>
        <li className={styles.sidebarLink}>
          <input
            id="Software-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Software-checkbox" className={styles.sidebarLinkText}>
            Software Engineering
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>

        <li className={styles.sidebarLink}>
          <input
            id="UX/UI-1"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="UX/UI-1" className={styles.sidebarLinkText}>
            UX/UI Design
          </label>
          <span className={styles.sidebarLinkBadge}>10</span>
        </li>

        <li className={styles.sidebarLink}>
          <input
            id="Python-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Python-2" className={styles.sidebarLinkText}>
            Python Developer
          </label>
          <span className={styles.sidebarLinkBadge}>2</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="React-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="checkbox-2" className={styles.sidebarLinkText}>
            React/React Native Developer
          </label>
          <span className={styles.sidebarLinkBadge}>4</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
