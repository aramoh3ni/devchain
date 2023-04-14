import axios from "axios"
import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router"
import JobBox, { JobBoxSkelton } from "../../components/Home/JobBox"
import Breadcrumb from "../../components/BreadCrumb"

import { BiTimeFive, BiTaskX, BiMap } from "react-icons/bi"
import { NavLink } from "react-router-dom"

const JobDetail = () => {
  let [jobs, setJobs] = useState([])
  const [job, setJob] = useState({})
  const { id } = useParams()

  const getJobs = async () => {
    const res = await axios.get(`/api/jobs/${id}`)
    if (res && res.data) {
      setJob(res.data.jobs)
    }
  }

  const getRelatedJobs = async () => {
    const res = await axios.get(`/api/jobs`)
    if (res && res.data) {
      setJobs(res.data.jobs)
    }
  }

  const relatedJobs = jobs.filter(j => j.title === job.title)

  useEffect(() => {
    getJobs()
    getRelatedJobs()
  }, [id])

  console.log(jobs, job)

  const skeleton = [1, 2, 3].map(() => JobBoxSkelton)

  const styles = {
    jobDetailWrapper: `container mx-auto min-h-[75vh] mt-6`,
    jobDetailContainer: `flex gap-4`,
    jobDetailSidebar: `flex-initial w-sm space-y-5 py-4`,
    jobDetailSidebarTitle: `text-lg font-body`,
    jobDetailBodyContainer: `flex-auto mt-16`,
    jobDetailBodyTitle: `flex items-start justify-between text-4xl font-bold mb-4`,
    jobDetailBodyTitleButton: `text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700`,
    jobDetailBodyContent: `font-light text-gray-500 dark:text-gray-400 py-4`,
    jobDetailBodyContentTitle: `font-medium text-lg text-white`,
    jobDetailList: `max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-300 font-medium`,
    jobDetailListItem: `flex items-center`,
    jobDetailListItemIcon: `w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0`,

    jobDetailTabWrapper: `text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700`,
    jobDetailTabList: `flex flex-wrap -mb-px`,
    jobDetailTabListItem: `mr-2`,
    jobDetailTabListItemLink: `inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`,
    jobDetailTabListItemLinkActive: `inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`,
  }

  return (
    <div className={styles.jobDetailWrapper}>
      <Breadcrumb />
      <div className={styles.jobDetailContainer}>
        <div className={styles.jobDetailSidebar}>
          <h3 className={styles.jobDetailSidebarTitle}>Related Jobs</h3>
          {relatedJobs && relatedJobs.length > 0
            ? relatedJobs?.map(job => (
                <JobBox
                  id={job.id}
                  key={job.id}
                  isNew
                  title={job.title}
                  text={job.description}
                  timeSpan="4 hours ago" // TODO: it will change
                />
              ))
            : skeleton}
        </div>
        <div className={styles.jobDetailBodyContainer}>
          <h1 className={styles.jobDetailBodyTitle}>
            {job?.title}
            <button type="button" className={styles.jobDetailBodyTitleButton}>
              Apply Now
            </button>
          </h1>

          <ul className={styles.jobDetailList}>
            <li className={styles.jobDetailListItem}>
              <BiTimeFive className={styles.jobDetailListItemIcon} />
              12 hours ago
            </li>
            <li className={styles.jobDetailListItem}>
              <BiTaskX className={styles.jobDetailListItemIcon} />
              20/DEC/2023
            </li>
            <li className={styles.jobDetailListItem}>
              <BiMap className={styles.jobDetailListItemIcon} />
              Kart-e-Say, Kabul, Afghanistan
            </li>
          </ul>

          <p className={styles.jobDetailBodyContent}>
            <strong className={styles.jobDetailBodyContentTitle}>
              Job Description
            </strong>
            <br />
            {job?.description}
          </p>

          <div className={styles.jobDetailTabWrapper}>
            <ul className={styles.jobDetailTabList}>
              <li className={styles.jobDetailTabListItem}>
                <NavLink
                  to="info"
                  className={({ isActive }) =>
                    isActive
                      ? styles.jobDetailTabListItemLinkActive
                      : styles.jobDetailTabListItemLink
                  }
                >
                  Job Details
                </NavLink>
              </li>
              <li className={styles.jobDetailTabListItem}>
                <NavLink
                  to="company"
                  className={({ isActive }) =>
                    isActive
                      ? styles.jobDetailTabListItemLinkActive
                      : styles.jobDetailTabListItemLink
                  }
                >
                  About Company
                </NavLink>
              </li>
              <li className={styles.jobDetailTabListItem}>
                <NavLink
                  to="requirement"
                  className={({ isActive }) =>
                    isActive
                      ? styles.jobDetailTabListItemLinkActive
                      : styles.jobDetailTabListItemLink
                  }
                >
                  Requirements
                </NavLink>
              </li>
              <li className={styles.jobDetailTabListItem}>
                <NavLink
                  to="responsibilities"
                  className={({ isActive }) =>
                    isActive
                      ? styles.jobDetailTabListItemLinkActive
                      : styles.jobDetailTabListItemLink
                  }
                >
                  Responsibilities
                </NavLink>
              </li>
              <li className={styles.jobDetailTabListItem}>
                <NavLink
                  to="guid-line"
                  className={({ isActive }) =>
                    isActive
                      ? styles.jobDetailTabListItemLinkActive
                      : styles.jobDetailTabListItemLink
                  }
                >
                  Submission Guideline
                </NavLink>
              </li>
            </ul>
            <div className="my-4 p-4 rounded-lg bg-secondary">
              <Outlet context={{ job }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
