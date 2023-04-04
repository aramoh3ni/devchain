import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const styles = {
  jobBoxContainer: `max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700`,
  jobBoxTitle: `mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`,
  jobBoxText: `mb-3 font-normal text-gray-700 dark:text-gray-400`,
  jobBoxLink: `inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
  jobBoxLinkIcon: `ml-3`,
}

const CreateJobBox = () => {
  return (
    <div className={styles.jobBoxContainer}>
      <h5 className={styles.jobBoxTitle}>Create New Job</h5>
      <p className={styles.jobBoxText}>
        Create your new job this will take a few steps. then you allow to
        announce you opportunity.
      </p>
      <a href="" className={styles.jobBoxLink}>
        Create
        <FontAwesomeIcon
          className={styles.jobBoxLinkIcon}
          icon={faArrowRight}
        />
      </a>
    </div>
  )
}

export default CreateJobBox
