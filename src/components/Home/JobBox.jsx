import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faBriefcaseClock,
} from "@fortawesome/free-solid-svg-icons"

const styles = {
  jobBoxWrapper: `relative max-w-sm p-6 bg-white border-default border-gray-200 rounded-lg dark:bg-secondary dark:border-gray-700 hover:shadow-lg`,
  jobBoxTitle: `mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white`,
  jobBoxText: `mb-3 font-normal text-gray-700 dark:text-gray-200`,
  jobBoxFooterWrapper: `flex justify-between items-end`,
  jobBoxButton: `inline-flex items-center px-3 py-2 text-sm font-medium text-blue-400 hover:text-blue-600 bg-gray-100 rounded-lg hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200`,
  jobBoxButtonIcon: `w-4 h-4 ml-2`,
  jobBoxTimeSpan: `inline-flex items-end rounded-full text-sm`,
  jobBoxBadge: `absolute inline-flex items-center justify-center w-auto h-6 px-2 text-xs font-bold text-white bg-red-500 border-default border-white rounded-full -top-3 right-3 dark:border-gray-600`
}

const JobBox = ({title, text, buttonText, timeSpan, isNew}) => {
  return (
    <div className={styles.jobBoxWrapper}>
      <a href="">
        <h5 className={styles.jobBoxTitle}>Software Engineer 🚀</h5>
      </a>
      <p className={styles.jobBoxText}>
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className={styles.jobBoxFooterWrapper}>
        <a href="" className={styles.jobBoxButton}>
          Read More
          <FontAwesomeIcon
            className={styles.jobBoxButtonIcon}
            icon={faArrowRight}
          />
        </a>
        <div className={styles.jobBoxTimeSpan}>
          <span>
          3 hours ago
          <FontAwesomeIcon icon={faBriefcaseClock} className="ml-3" />
          </span>
        </div>
      </div>
      <div className={styles.jobBoxBadge}>
        New
      </div>
    </div>
  )
}

export default JobBox
