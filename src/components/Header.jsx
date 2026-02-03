import Nav from "./Nav";
import "../styles/header.css";
import logo from "../assets/logoms.png";

function Header() {
  return (
   <header className="header">
      <div className="header-container">
        <div className="brand">
          <img src={logo} alt="MS logo" className="logo" />
          <span className="brand-name">Matheus Sousa</span>
        </div>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
