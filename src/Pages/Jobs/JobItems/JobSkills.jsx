import { useOutletContext } from "react-router-dom"

const JobSkills = () => {
  const { job } = useOutletContext()

  return (
    <div className="px-3 py-2 flex flex-wrap gap-2">
      {job?.skills.map((skill, i) => (
        <span
          key={i}
          className="bg-blue-100 text-blue-800 text-md font-medium px-2 md:px-3.5 md:py-1 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default JobSkills
