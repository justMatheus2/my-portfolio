import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        Some projects I’ve built to practice and improve my front-end skills.
      </p>

      <div className="projects-container">
        <ProjectCard
          title="Booking Appointment App"
          description="A booking system that allows users to select available dates and time slots."
          tech={["React", "JavaScript", "CSS"]}
          live="#"
          github="#"
        />
      </div>
    </section>
  );
}

export default Projects;
