import { useState } from "react";
import "../styles/nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
