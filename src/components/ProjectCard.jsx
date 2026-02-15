import "../styles/projectCard.css";

function ProjectCard({ title, description, tech, image, imageAlt, live, github }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={imageAlt} className="project-image" loading="lazy" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="tech-stack">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a className="project-btn project-btn-primary" href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a className="project-btn" href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
