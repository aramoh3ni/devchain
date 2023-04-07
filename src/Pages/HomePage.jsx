import JobBox from "../components/Home/JobBox"
import { useJobs } from "../hooks/useJobs"

const HomePage = () => {
  const { jobs } = useJobs()
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
      {jobs?.map(job => (
        <JobBox 
        key={job._id}
        isNew 
        title={job.title} 
        text={job.description}
        timeSpan="4 hours ago" // TODO: it will change
        />
      ))}
    </div>
  )
}

export default HomePage