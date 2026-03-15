import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import { projectItems } from "../lib/portfolioData";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A selection of projects that highlight responsive layout skills,
        reusable components, and modern front-end design.
      </p>

      <div className="projects-container">
        {projectItems.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
