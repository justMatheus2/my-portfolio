import "../styles/about.css";
import profile from "../assets/profile_ft.jpeg";

function About() {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        <img src={profile} alt="Matheus profile" className="about-image" />

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a Front-End Developer based in Ireland, focused on building
            responsive and user-friendly web applications using modern
            JavaScript and React.
          </p>
          <p>
            I enjoy turning ideas into clean, functional interfaces and I’m
            currently looking for a Junior Front-End Developer role.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
