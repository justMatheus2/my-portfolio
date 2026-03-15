import PropTypes from "prop-types";
import "../styles/projectCard.css";

function ProjectCard({
  title,
  description,
  difficulty,
  duration,
  mainTech,
  challenge,
  result,
  tech,
  image,
  imageAlt,
  live,
  github,
}) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className="project-image"
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <div className="project-header-row">
          <h3>{title}</h3>
          <div className="project-badges">
            <span className="project-badge">{difficulty}</span>
            <span className="project-badge">{duration}</span>
          </div>
        </div>
        <p>{description}</p>

        <p className="project-subtitle">
          <strong>Tecnologias principais:</strong> {mainTech.join(", ")}
        </p>
        <p className="project-challenge">
          <strong>Desafio:</strong> {challenge}
        </p>
        <p className="project-result">
          <strong>Resultado:</strong> {result}
        </p>

        <ul className="tech-stack">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a
          className="project-btn project-btn-primary"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          className="project-btn"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string,
  duration: PropTypes.string,
  mainTech: PropTypes.arrayOf(PropTypes.string),
  challenge: PropTypes.string,
  result: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  difficulty: "Nível não especificado",
  duration: "Tempo não especificado",
  mainTech: [],
  challenge: "",
  result: "",
};

export default ProjectCard;
