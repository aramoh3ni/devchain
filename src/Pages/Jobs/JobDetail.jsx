import { useParams } from "react-router"

const JobDetail = () => {
  const { id } = useParams()
  return <div>JobDetail: {id}</div>
}

export default JobDetail
