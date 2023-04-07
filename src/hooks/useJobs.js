import axios from "axios"
import { useState, useEffect } from "react"

export const useJobs = () => {
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    const res = await axios.get("/api/jobs")
    if (res && res.data) setJobs(res.data)
  }

  useEffect(() => {
    getJobs()
  }, [])

  return jobs
}
