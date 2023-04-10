import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faBriefcaseClock,
} from "@fortawesome/free-solid-svg-icons"

const styles = {
  jobBoxWrapper: `relative p-6 bg-white border-default border-gray-200 rounded-lg dark:bg-secondary dark:border-gray-700 hover:shadow-lg`,
  jobBoxTitle: `mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white`,
  jobBoxText: `mb-3 font-normal text-gray-700 dark:text-gray-200`,
  jobBoxFooterWrapper: `flex justify-between items-end`,
  jobBoxButton: `inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
  jobBoxButtonIcon: `w-4 h-4 ml-2`,
  jobBoxTimeSpan: `inline-flex items-end rounded-full text-sm`,
  jobBoxBadge: `absolute inline-flex items-center justify-center w-auto h-6 px-2 text-xs font-bold text-white bg-red-500 border-default border-white rounded-full -top-3 right-3 dark:border-gray-600`,
}

const JobBox = ({ title, text, timeSpan, isNew }) => {
  // TODO:: create url path for title
  // ? TEMP URL
  // TODO:: create New Badge if job.publish is not more then 1 day.
  // TODO:: create Expired Badge if job.deadline is outdate.
  // TODO:: create Organization Logo that should at the top of JobBox Component

  const url = title.toLowerCase().replace(" ", "-")

  return (
    <div className={styles.jobBoxWrapper}>
      <Link to={`${url}`}>
        <h5 className={styles.jobBoxTitle}>{title ?? ""}</h5>
      </Link>
      <p className={styles.jobBoxText}>{text ? text.slice(0, 100) : ""}</p>
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
            {timeSpan ?? ""}
            <FontAwesomeIcon icon={faBriefcaseClock} className="ml-3" />
          </span>
        </div>
      </div>
      {isNew && <div className={styles.jobBoxBadge}>New</div>}
    </div>
  )
}

export default JobBox

export const JobBoxSkelton = (
  <div className="relative p-6 bg-white border-default border-gray-200 rounded-lg bg-transparent dark:border-hr hover:shadow-lg">
    <div role="status" class="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[80px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)
