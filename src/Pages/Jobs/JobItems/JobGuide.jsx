import { useOutletContext } from "react-router-dom"

const JobGuide = () => {
  const { job } = useOutletContext()

  return (
    <>
      <div className="px-6 py-4 text-xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Submission Guideline
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          {job?.submissionGuideLine}
        </p>
      </div>
      <div className="px-6 py-4 text-xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Submission Email
        <p className="mt-1 text-sm font-semibold text-blue-500">
          <a href={`mailto:${job?.submissionEmail}`}>{job?.submissionEmail}</a>
        </p>
      </div>
    </>
  )
}

export default JobGuide
