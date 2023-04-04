import JobBox from "../components/Home/JobBox"

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="">
      <JobBox 
        isNew 
        title="React Developer" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet quibusdam sapiente optio laboriosam, tenetur."
        timeSpan="4 hours ago"
        />
      </div>
      <div className="">
      <JobBox 
        isNew 
        title="Data Analysis" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet quibusdam sapiente optio laboriosam, tenetur."
        timeSpan="4 hours ago"
        />

      </div>
      <div className="">
      <JobBox 
 
        title="Back-end Developer" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet quibusdam sapiente optio laboriosam, tenetur."
        timeSpan="4 hours ago"
        />

      </div>
      <div className="">
      <JobBox 
         
        title="Software Developer" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet quibusdam sapiente optio laboriosam, tenetur."
        timeSpan="4 hours ago"
        />

      </div>
      <div className="">
      <JobBox 
         
        title="UX/UI Designer" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eveniet quibusdam sapiente optio laboriosam, tenetur."
        timeSpan="4 hours ago"
        />

      </div>
    </div>
  )
}

export default HomePage