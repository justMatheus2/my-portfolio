import "../styles/projectCard.css";

function ProjectCard({ title, description, tech, live, github }) {
  return (
    <article className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="tech-stack">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
