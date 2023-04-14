import { createServer, Model, Response } from "miragejs"

createServer({
  models: {
    jobs: Model,
  },

  seeds(server) {
    server.create("job", {
      id: "1",
      published: "3 hours ago",
      deadline: "3-March-2023",
      title: "React Developer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Tuts Tech",
    })
    server.create("job", {
      id: "2",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Netlinks Co",
    })
    server.create("job", {
      id: "3",
      published: "4 day ago",
      deadline: "3-March-2023",
      title: "UX/UI Designer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "JFITSC.Co",
    })
    server.create("job", {
      id: "4",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "MCIT",
    })
    server.create("job", {
      id: "10",
      published: "3 hours ago",
      deadline: "3-March-2023",
      title: "React Developer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Tuts Tech",
    })
    server.create("job", {
      id: "20",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Netlinks Co",
    })
    server.create("job", {
      id: "30",
      published: "4 day ago",
      deadline: "3-March-2023",
      title: "UX/UI Designer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "JFITSC.Co",
    })
    server.create("job", {
      id: "40",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "MCIT",
    })
    server.create("job", {
      id: "100",
      published: "3 hours ago",
      deadline: "3-March-2023",
      title: "React Developer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Tuts Tech",
    })
    server.create("job", {
      id: "200",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Netlinks Co",
    })
    server.create("job", {
      id: "300",
      published: "4 day ago",
      deadline: "3-March-2023",
      title: "UX/UI Designer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "JFITSC.Co",
    })
    server.create("job", {
      id: "400",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "MCIT",
    })
    server.create("job", {
      id: "1000",
      published: "3 hours ago",
      deadline: "3-March-2023",
      title: "React Developer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Tuts Tech",
    })
    server.create("job", {
      id: "2000",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Netlinks Co",
    })
    server.create("job", {
      id: "3000",
      published: "4 day ago",
      deadline: "3-March-2023",
      title: "UX/UI Designer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "JFITSC.Co",
    })
    server.create("job", {
      id: "4000",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "MCIT",
    })
    server.create("job", {
      id: "101",
      published: "3 hours ago",
      deadline: "3-March-2023",
      title: "React Developer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Tuts Tech",
    })
    server.create("job", {
      id: "211",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "Netlinks Co",
    })
    server.create("job", {
      id: "311",
      published: "4 day ago",
      deadline: "3-March-2023",
      title: "UX/UI Designer",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "JFITSC.Co",
    })
    server.create("job", {
      id: "411",
      published: "1 day ago",
      deadline: "3-March-2023",
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amen consectetur dang elite. Venite quibusdam sapient option laboriously, tenter.",
      company: "MCIT",
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
