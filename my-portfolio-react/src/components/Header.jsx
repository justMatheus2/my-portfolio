import Nav from "./Nav";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <span className="logo">Matheus.dev</span>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
