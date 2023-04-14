import { useOutletContext } from "react-router-dom"

const JobCompany = () => {
  const { job } = useOutletContext()
  const { description, email, location, name, website } = job?.organization

  const webUrl =
    website?.includes("http://") || website?.includes("https://")
      ? website
      : `https://${website}`

  return (
    <div className="">
      <div className="px-6 py-4 text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        {name}
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      {email && (
        <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
          <h1 className="md:w-60 sm:border-b-gray-600 px-6 py-4 font-semibold text-gray-900 bg-transparent sm:bg-gray-50 dark:text-white dark:bg-gray-800 ">
            Email Address
          </h1>
          <p className="px-6 py-4 text-gray-900">
            <a href={`mailto:${email}`} className="text-blue-600 font-semibold">
              {email}
            </a>
          </p>
        </div>
      )}
      {location && (
        <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
          <h1 className="md:w-60 sm:border-b-gray-600 px-6 py-4 font-semibold text-gray-900 bg-transparent sm:bg-gray-50 dark:text-white dark:bg-gray-8000">
            Location
          </h1>
          <p className="px-6 py-4 text-gray-900">{location}</p>
        </div>
      )}
      {website && (
        <div className="flex justify-between md:justify-start items-center border-gray-200 dark:border-gray-700">
          <h1 className="md:w-60 sm:border-b-gray-600 px-6 py-4 font-semibold text-gray-900 bg-transparent sm:bg-gray-50 dark:text-white dark:bg-gray-8000">
            Website
          </h1>
          <a
            href={webUrl}
            target="_blank"
            className="px-6 py-4 font-semibold text-blue-700"
          >
            {website}
          </a>
        </div>
      )}
    </div>
  )
}

export default JobCompany
