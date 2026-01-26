import "../styles/footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Matheus.dev</h3>
          <p>
            Front-End Developer based in Ireland, focused on building clean and
            responsive web interfaces.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:sousamatheus191999@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matheus-sousa-8b6608374/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/justMatheus2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Matheus. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
