import { useOutletContext } from "react-router-dom"

const JobInfo = () => {
  const { job } = useOutletContext()
  return (
    <div className="w-full text-md md:text-md text-left text-gray-500 dark:text-gray-400">
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className="md:w-60 sm:border-b-gray-600 px-6 py-4 font-bold text-gray-900 bg-transparent sm:bg-gray-50 dark:text-white dark:bg-gray-800 ">
          Announced Date
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.announcedDate}</p>
      </div>

      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
          Deadline
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.deadLine}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Reference Number
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.refNumber}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Number of Vacancies
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.vcNumber}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Salary Range
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.salary}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Years of Experience
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.experience}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Probation Period
        </h1>
        <p className="px-6 py-4 text-gray-900">N/A</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Contract Duration
        </h1>
        <p className="px-6 py-4 text-gray-900">{job?.contractDuration}</p>
      </div>
      <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Contract Extensible
        </h1>
        <p className="px-6 py-4 text-gray-900">No</p>
      </div>
      <div className="flex justify-between md:justify-start items-center er-gray-700">
        <h1 className=" md:w-60 px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-transparent md:bg-gray-50 dark:text-white dark:bg-gray-800">
          Minimum Education
        </h1>
        <p className="px-6 py-4 text-right text-gray-900">{job?.eduction}</p>
      </div>
    </div>
  )
}

export default JobInfo
