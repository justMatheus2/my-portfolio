import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import bookingImage from "../assets/project-booking.svg";
import ecommerceImage from "../assets/project-ecommerce.svg";
import weatherImage from "../assets/project-weather.svg";
import dashboardImage from "../assets/project-dashboard.svg";

const projectItems = [
  {
    title: "Booking Appointment App",
    description:
      "A booking system that lets users choose available dates and time slots with a smooth scheduling flow.",
    tech: ["React", "JavaScript", "CSS"],
    image: bookingImage,
    imageAlt: "Booking Appointment App interface preview",
    live: "https://justmatheus2.github.io/barbershop_booking_app/",
    github: "https://github.com/justMatheus2/barbershop_booking_app",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A responsive shopping experience with product filtering, clean product cards, and cart-ready architecture.",
    tech: ["React", "Vite", "Responsive UI"],
    image: ecommerceImage,
    imageAlt: "E-commerce storefront interface preview",
    live: "https://example.com/ecommerce-demo",
    github: "https://github.com/justMatheus2",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather app concept with current conditions, short forecast cards, and a modern, quick-scan layout.",
    tech: ["React", "API Integration", "Flexbox"],
    image: weatherImage,
    imageAlt: "Weather dashboard interface preview",
    live: "https://example.com/weather-demo",
    github: "https://github.com/justMatheus2",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A data-focused dashboard concept with summary widgets, trend visuals, and reusable UI blocks.",
    tech: ["React", "Component Design", "Charts UI"],
    image: dashboardImage,
    imageAlt: "Analytics dashboard interface preview",
    live: "https://example.com/dashboard-demo",
    github: "https://github.com/justMatheus2",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A selection of projects that highlight responsive layout skills,
        reusable components, and modern front-end design.
      </p>

      <div className="projects-container">
        {projectItems.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
