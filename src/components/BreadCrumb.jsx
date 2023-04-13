import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons"

import { Link, useLocation } from "react-router-dom"

const Breadcrumb = ({ title }) => {
  const { pathname } = useLocation()
  const path = pathname.split("/", 2)

  return (
    <div>
      <nav
        className="flex items-end justify-between"
        aria-label="Breadcrumb"
      >
        <Link to={`..`} relative="path" className=" font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
          Back
        </Link>
  
        
        <ol className="inline-flex items-center mt-2 md:mt-0 space-x-1 md:space-x-3 sm:mb-0">
          <li>
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to={`..`}
                relative="path"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {path}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="mx-1 text-sm font-medium text-gray-500 md:mx-2 dark:text-gray-400">
                {title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
