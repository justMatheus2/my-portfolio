import "../styles/skills.css";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

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
