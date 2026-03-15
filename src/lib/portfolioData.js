import bookingImage from "../assets/Booking_App.png";
import ecommerceImage from "../assets/project-ecommerce.svg";
import weatherImage from "../assets/project-weather.svg";
import dashboardImage from "../assets/project-dashboard.svg";

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
  "GitHub",
  "Responsive Design",
];

export const projectItems = [
  {
    title: "Booking Appointment App",
    description:
      "A scheduling interface for users to pick slots, confirm appointments, and manage availability.",
    difficulty: "Intermediate",
    duration: "2 weeks",
    mainTech: ["React", "JavaScript", "CSS"],
    challenge:
      "Handle valid date/time selection with occupied slot validation.",
    result: "Functional appointment booking flow with clear user interaction.",
    tech: ["React", "JavaScript", "CSS"],
    image: bookingImage,
    imageAlt: "Booking Appointment App interface preview",
    live: "https://justmatheus2.github.io/barbershop_booking_app/",
    github: "https://github.com/justMatheus2/barbershop_booking_app",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A responsive storefront with product cards, filters, and cart-ready architecture.",
    difficulty: "Intermediate",
    duration: "12 days",
    mainTech: ["React", "Vite", "Responsive UI"],
    challenge:
      "Design a layout that works well across desktop and mobile with fast filters.",
    result: "Shopping interface with clear navigation and attractive visuals.",
    tech: ["React", "Vite", "Responsive UI"],
    image: ecommerceImage,
    imageAlt: "E-commerce storefront interface preview",
    live: "https://example.com/ecommerce-demo",
    github: "https://github.com/justMatheus2",
  },
  {
    title: "Weather Dashboard",
    description: "Weather panel showing current conditions and forecast cards.",
    difficulty: "Beginner",
    duration: "8 days",
    mainTech: ["React", "API Integration", "Flexbox"],
    challenge: "Consume external API and display data in readable card format.",
    result: "Fast weather dashboard with easy-to-read insights.",
    tech: ["React", "API Integration", "Flexbox"],
    image: weatherImage,
    imageAlt: "Weather dashboard interface preview",
    live: "https://example.com/weather-demo",
    github: "https://github.com/justMatheus2",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An analytics dashboard with KPI widgets and modular component layout.",
    difficulty: "Intermediate",
    duration: "10 days",
    mainTech: ["React", "Component Design", "Charts UI"],
    challenge:
      "Build reusable components for data presentation across sections.",
    result: "Elegant dashboard with an extensible architecture.",
    tech: ["React", "Component Design", "Charts UI"],
    image: dashboardImage,
    imageAlt: "Analytics dashboard interface preview",
    live: "https://example.com/dashboard-demo",
    github: "https://github.com/justMatheus2",
  },
];
