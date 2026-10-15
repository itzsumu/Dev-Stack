
function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A web application for browsing products, managing a cart, and placing orders.",
      technologies: "React, Node.js, PostgreSQL",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for organizing tasks and tracking progress.",
      technologies: "React, JavaScript, CSS",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal website to showcase projects, technical skills, and experience.",
      technologies: "React, HTML, CSS",
    },
  ];

  return (
    <section className="projects-section container" id="projects">
      <div className="section-heading">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>
          Explore project ideas built with modern development technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.technologies}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
