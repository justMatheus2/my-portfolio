import "../styles/skills.css";
import { skills } from "../lib/portfolioData";

function Skills() {
  return (
    <section className="skills fade-in">
      <h2>Skills</h2>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
