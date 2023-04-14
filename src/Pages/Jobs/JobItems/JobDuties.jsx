const JobDuties = () => {
  return (
    <ul className="px-6 mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Individual configuration</span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>No setup, or hidden fees</span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>
          Team size:{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1 developer
          </span>
        </span>
      </li>
    </ul>
  )
}

export default JobDuties
