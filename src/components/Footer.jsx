import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/footer.css";

const contactItems = [
  {
    label: "Email",
    href: "mailto:sousamatheus191999@gmail.com",
    icon: HiOutlineEnvelope,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-sousa-8b6608374/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/justMatheus2",
    icon: FaGithub,
  },
];

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
            {contactItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
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
