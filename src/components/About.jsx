import "../styles/about.css";
import profile from "../assets/new_logo.png";

function About() {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        <img
          src={profile}
          alt="Photo of Matheus Sousa, front-end developer"
          className="about-image"
        />

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a Front-End Developer based in Ireland, focused on building
            responsive and user-friendly web applications using modern
            JavaScript and React.
          </p>
          <p>
            I enjoy turning ideas into clean, functional interfaces and I’m
            currently dividing into Back-End. I’m passionate about learning new technologies and improving my skills to create better user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
