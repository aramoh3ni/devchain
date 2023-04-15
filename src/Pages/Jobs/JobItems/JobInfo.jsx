import { useOutletContext } from "react-router-dom"

const JobInfo = () => {
  const { job } = useOutletContext()
  return (
    <div className="w-full text-md md:text-md text-left">
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Reference Number
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">{job?.refNumber}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Salary Range
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">{job?.salary}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Years of Experience
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">{job?.experience}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Probation Period
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">N/A</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Contract Duration
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">{job?.contractDuration}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Contract Extensible
        </h1>
        <p className="px-6 py-4 text-gray-900 dark:text-gray-200">No</p>
      </div>
      <div className="flex justify-between md:justify-start items-center">
        <h1 className="md:w-60 px-6 py-4 font-bold text-gray-200 whitespace-nowrap">
          Minimum Education
        </h1>
        <p className="px-6 py-4 text-right text-gray-900 dark:text-gray-200">{job?.eduction}</p>
      </div>
    </div>
  )
}

export default JobInfo
