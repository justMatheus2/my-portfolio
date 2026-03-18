import Nav from "./Nav";
import "../styles/header.css";
import logo from "../assets/Logoms.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <div className="brand">
            <img src={logo} alt="MS logo" className="logo" />
            <span className="brand-name">Matheus Sousa</span>
          </div>
          <p className="header-tagline">
            📌 Seeking Junior role with a focus on clean interfaces.
          </p>
          <a className="header-cta" href="#projects">
            See projects
          </a>
        </div>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
