import { createServer, Model, Response } from "miragejs"

createServer({
  models: {
    jobs: Model,
  },

  seeds(server) {
    server.create("job", {
      id: "1",
      announcedDate: "2/March/2023",
      deadLine: "28/March/2023",
      skills: ["php", "laravel", "python", "System Design", "Agile"],
      vcNumber: "MT0210",
      refNumber: "N/A",
      title: "React Developer",
      description:
        "We are seeking a talented and experienced React Developer to join our growing team. As a React Developer, you will be responsible for building high-quality, scalable, and user-friendly web applications using React. You will work closely with our design and product teams to understand client requirements and translate them into functional and visually appealing applications.",
      nationality: "Afghan",
      employmentType: "full time",
      numberOfJobs: 3,
      responsibilities: "",
      requirements: [
        "Broad understanding of social, political and economic context of the country.",
        "Experience in program implementation with an international NGO is preferred.",
        "Practical and theoretical knowledge of community mobilization and development in conics-affected areas.",
        "Strong organizational skills and ability to multi-task.",
        "Experience designing and implementing training and capacity building.",
        "Honest, hardworking and committed to community development Knowledge and experience of livelihood restoration and new livelihood development are required.",
        " Basic computer skills in MS O¨ce programs, particularly Excel.",
        "Basic oral and written English skills and good Pashto/Dari written and spoken.",
        "Ability to think independently and solve led level problems.",
      ],
      category: {
        id: "1",
        title: "IT/Software",
      },
      gender: "Male",
      eduction: "Bachelors Degree in Computer Science or Software Engineering",
      experience: "1 Years",
      organization: {
        website: "milestone.org",
        id: "1",
        name: "Milestone",
        description:
          "Milestone Technologies is a multi-national software company specializing in building high-quality software solutions to help businesses thrive.",
        email: "info@milestonetechs.com",
        location: "Kabul, Afghanistan",
      },
      contractDuration: "1 Year",
      contractType: ["full time", "remote", "flexible"],
      salary: "$10/hr",
      submissionGuideLine:
        "Please send your resume to the email address below. Be sure to specify which vacancy you are applying to and let us know why you are a good fit for this position.",
      submissionEmail: "info@milestonetechs.com",
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false
    this.timing = 200

    this.get("/jobs", (schema, request) => {
      // return new Response(400, {}, { error: "Error fetching data" })
      return schema.jobs.all()
    })

    this.get("/jobs/:id", (schema, request) => {
      const id = request.params.id
      return schema.jobs.findBy({ id })
    })

    this.get("/jobs/details", (schema, request) => {
      // Hard-code the hostId for now
      return schema.jobs.where({ hostId: "123" })
    })

    this.get("/jobs/res/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.jobs.findBy({ id, hostId: "123" })
    })
  },
})
