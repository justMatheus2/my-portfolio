import Nav from "./Nav";
import "../styles/header.css";
import logo from "../assets/logoms.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Matheus logo" className="logoms" 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <span className="logo">Matheus.dev</span>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
