import axios from "axios"
import { useState, useEffect } from "react"

import { FaSearch } from 'react-icons/fa'
import { FcFinePrint } from 'react-icons/fc'

import JobBox, { JobBoxSkelton } from "../../components/Home/JobBox"
import Breadcrumb from "../../components/BreadCrumb"

const JobPage = () => {
  const [jobs, setJobs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const getJobs = async () => {
    const res = await axios.get("/api/jobs")
    if (res && res.data) {
      setJobs(res.data.jobs)
    }
  }

  const filterJobs = jobs && searchQuery.length > 0
    ? jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : jobs

  const handleSearch = e => {
    e.preventDefault()
  }

  useEffect(() => {
    getJobs()
  }, [])

  const skeleton = [1, 2, 3, 4, 5, 6].map(() => JobBoxSkelton)

  const noJobBox = (<div className="flex items-center gap-3 p-3 bg-white border-default border-gray-200 rounded-lg dark:bg-secondary dark:border-gray-700 hover:shadow-lg select-none">
    <FcFinePrint size={60} className="w-20 h-20" />
    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white w-80 overflow-hidden">No Job! : {searchQuery}</h1>
  </div>)

  return (
    <div className="container m-auto mt-6">
      <Breadcrumb />

      <form className="w-md mx-auto mt-10" onSubmit={e => handleSearch(e)}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="font-semibold" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm border-none outline-none text-gray-900 rounded-lg bg-gray-50 dark:bg-secondary focus:bg-darker dark:placeholder-gray-400 dark:text-white  "
            placeholder="Search [Job title]"
            onChange={e => setSearchQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-secondary"></hr>

      <div className={`pb-6 grid grid-cols-3 gap-y-4 gap-x-2`}>
        {filterJobs && filterJobs.length > 0
          ? filterJobs?.map(job => (
              <JobBox
                id={job.id}
                key={job.id}
                isNew
                title={job.title}
                text={job.description}
                timeSpan="4 hours ago" // TODO: it will change
              />
            ))
          : filterJobs.length === 0  && jobs.length ? noJobBox : skeleton}
      </div>
    </div>
  )
}
export default JobPage
