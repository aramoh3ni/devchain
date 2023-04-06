import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPieChart,
  faInbox,
  faPlus
} from "@fortawesome/free-solid-svg-icons"
import SidebarDropdownList from "./SidebarDropdownList"

const styles = {
  sidebarWrapper: `px-3 py-4 mb-90 select-none w-80 h-[93vh] overflow-y-auto`,
  sidebarLink: `w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-secondary`,
  sidebarLinkIcon: `w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
  sidebarLinkText: `flex-1 ml-3 text-sm`,
  sidebarLinkBadge: `inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-600 dark:text-gray-100`,
  sidebarLinkCheckBox: `w-4 h-4 text-blue-600 border-gray-300 rounded`,
  sidebarDivider: `h-[1px] my-2 bg-gray-600 border-0 dark:bg-gray-600`,
  sidebarClearFilter: `inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
}

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>  
      <SidebarDropdownList title="Employment Type">
        <li className={styles.sidebarLink}>
          <input
            id="Full-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Full-checkbox" className={styles.sidebarLinkText}>
            Full Time
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Part-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Part-checkbox" className={styles.sidebarLinkText}>
            Part Time
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Remote-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Remote-checkbox" className={styles.sidebarLinkText}>
            Remote
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Internship-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Internship-checkbox" className={styles.sidebarLinkText}>
            Internship
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Contract-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Contract-checkbox" className={styles.sidebarLinkText}>
            Contract
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Training-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Training-checkbox" className={styles.sidebarLinkText}>
            Training
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>
      </SidebarDropdownList>

      <hr className={styles.sidebarDivider} />

      <SidebarDropdownList title="Top 5 Categories">
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
            id="checkbox-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="checkbox-2" className={styles.sidebarLinkText}>
            React/React Native Developer
          </label>
          <span className={styles.sidebarLinkBadge}>4</span>
        </li>
      </SidebarDropdownList>
      <hr className={styles.sidebarDivider} />

      <SidebarDropdownList title="Top 5 Categories">
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
            id="checkbox-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="checkbox-2" className={styles.sidebarLinkText}>
            React/React Native Developer
          </label>
          <span className={styles.sidebarLinkBadge}>4</span>
        </li>
      </SidebarDropdownList>
      <hr className={styles.sidebarDivider} />

      <SidebarDropdownList title="Seniority Level">
        <li className={styles.sidebarLink}>
          <input
            id="Student-checkbox"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Student-checkbox" className={styles.sidebarLinkText}>
            Student Level
          </label>
          <span className={styles.sidebarLinkBadge}>3</span>
        </li>

        <li className={styles.sidebarLink}>
          <input
            id="Entry/UI-1"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Entry/UI-1" className={styles.sidebarLinkText}>
            Entry Level
          </label>
          <span className={styles.sidebarLinkBadge}>10</span>
        </li>

        <li className={styles.sidebarLink}>
          <input
            id="Mid-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Mid-2" className={styles.sidebarLinkText}>
            Mid Level
          </label>
          <span className={styles.sidebarLinkBadge}>2</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Senior-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Senior-2" className={styles.sidebarLinkText}>
            Senior Level
          </label>
          <span className={styles.sidebarLinkBadge}>4</span>
        </li>
        <li className={styles.sidebarLink}>
          <input
            id="Director-2"
            type="checkbox"
            value=""
            className={styles.sidebarLinkCheckBox}
          />
          <label htmlFor="Director-2" className={styles.sidebarLinkText}>
            Director
          </label>
          <span className={styles.sidebarLinkBadge}>4</span>
        </li>
      </SidebarDropdownList>
    </div>
  )
}

export default Sidebar
