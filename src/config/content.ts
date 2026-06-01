import heroImg from '../assets/hero-img.png';
import eCommerceImg from '../assets/e-commerce.png';
import bookingAppImg from '../assets/booking-app.png';
import weatherAppImg from '../assets/weather-app.png';
import aboutUsImg from '../assets/about-us.png';

// ====================================
// CONFIGURAÇÃO DE CONTEÚDO DO SITE
// ====================================
// Edite aqui para mudar todos os textos e conteúdos

export const siteConfig = {
  // Nome do site/empresa
  siteName: 'MSTECH',
  siteNamePart1: 'MS',
  siteNamePart2: 'TECH',

  // Copyright
  copyright: '© 2026 MS TECH · All Rights Reserved',
};

// ====================================
// SEÇÃO HERO (Primeira seção)
// ====================================
export const heroContent = {
  badge: 'High-Performance Websites',
  title: 'DESIGNED TO GROW YOUR BUSINESS.',
  description: 'We combine design and development to deliver complete digital solutions. Beautiful interfaces powered by modern technologies.',

  buttons: {
    primary: {
      text: 'View our work',
      link: '#projects'
    },
    secondary: {
      text: 'Start your project',
      link: '#contact'
    }
  },

  // Imagem de fundo do Hero
  backgroundImage: heroImg
};

// ====================================
// SEÇÃO SERVICES (Serviços)
// ====================================
export const servicesContent = {
  title: 'Our Services',
  subtitle: 'Everything you need to build a strong and effective online presence.',

  services: [
    {
      id: 1,
      title: 'Web Design',
      description: 'We design clean, modern interfaces that reflect your brand and create a seamless user experience.',
      icon: 'Palette' // Opções: Palette, Code, Calendar, Zap
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'We build fast, responsive and scalable websites using modern technologies like React and Vite.',
      icon: 'Code'
    },
    {
      id: 3,
      title: 'Booking Systems',
      description: 'Custom scheduling solutions to automate your bookings and improve customer experience.',
      icon: 'Calendar'
    },
    {
      id: 4,
      title: 'Website Optimization',
      description: 'We enhance speed, performance and structure to maximize your website\'s results.',
      icon: 'Zap'
    }
  ],

  ctaButton: {
    text: 'Your digital presence starts here',
    link: '#contact'
  }
};

// ====================================
// SEÇÃO PORTFOLIO (Projetos)
// ====================================
export const portfolioContent = {
  title: 'Our Work',
  subtitle: 'A showcase of recent projects that demonstrate our expertise in creating powerful web solutions.',

  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Vite, featuring a responsive design and seamless user experience.',
      challenge: 'Creating a fast and responsive online store that can handle high traffic and provide a smooth shopping experience.',
      category: 'Web Development',
      image: eCommerceImg,
      link: 'https://justmatheus2.github.io/e-commerce-page/',
      technologies: ['React', 'Vite', 'TypeScript', 'Responsive UI']
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      description: 'An interactive financial dashboard that visualizes real-time data through charts and metrics, helping teams make data-driven decisions.',
      challenge: 'Presenting complex financial data in a clear, intuitive way while keeping performance high with frequent data updates.',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      link: '#',
      technologies: ['React', 'TypeScript', 'Chart.js']
    },
    {
      id: 3,
      title: 'Booking System',
      category: 'Web Development',
      description: 'A custom booking system designed to automate scheduling and improve customer experience for a service-based business.',
      challenge: 'Developing a user-friendly and efficient booking system that can handle multiple services, time slots and customer interactions.',
      image: bookingAppImg,
      link: 'https://justmatheus2.github.io/barbershop_booking_app',
      technologies: ['React', 'JavaScript', 'CSS', 'Responsive Design']
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Weather panel showing current conditions and forecast cards. Fast weather dashboard with easy-to-read insights.',
      challenge: 'Consume external API and display data in readable card format.',
      category: 'Weather Dashboard',
      image: weatherAppImg,
      link: 'https://justmatheus2.github.io/weather-app/',
      technologies: ['React', 'API Integration', 'Responsive Design', 'Flexbox']
    },
    {
      id: 5,
      title: 'Music Streaming App',
      description: 'A mobile-first music streaming web app with playlist management, playback controls and a sleek audio-focused interface.',
      challenge: 'Delivering smooth audio playback and a responsive UI that feels native on mobile while running entirely in the browser.',
      category: 'Mobile Web',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
      link: '#',
      technologies: ['React', 'Web Audio API']
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'A full-featured real estate platform with property listings, search filters, and real-time chat between buyers and agents.',
      challenge: 'Handling real-time database syncing and building a powerful search experience across hundreds of property listings.',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      link: '#',
      technologies: ['React', 'Firebase']
    }
  ]
};

// ====================================
// SEÇÃO ABOUT (Sobre nós)
// ====================================
export const aboutContent = {
  title1: 'About',
  title2Part1: 'MS',
  title2Part2: 'TECH',

  image: aboutUsImg,

  paragraphs: [
    'MS TECH is a web design and development studio focused on creating beautiful digital experiences. We combine creativity with technical expertise to deliver complete digital solutions.',
    'By combining creativity with technical expertise, we create not just websites, but complete digital experiences. Every project is unique, beautifully designed but also fast, functional and optimized for performance.',
    'We believe a website is more than just code — it\'s good — it should support your business, attract clients and generate real results.'
  ]
};

// ====================================
// SEÇÃO WHY US (Por que nós)
// ====================================
export const whyUsContent = {
  title: 'Why Work With Us?',
  subtitle: 'Unlike traditional freelancers, we combine design and development from the',
  subtitleHighlight: 'start',
  subtitleEnd: '— ensuring your website is both visually stunning and technically solid.',

  reasons: [
    {
      id: 1,
      icon: 'Palette', // Opções: Palette, Code2, TrendingUp
      title: 'Design',
      description: 'Clean, modern and user-focused interfaces that elevate your brand.'
    },
    {
      id: 2,
      icon: 'Code2',
      title: 'Development',
      description: 'Fast, responsive and optimized websites built with modern technologies.'
    },
    {
      id: 3,
      icon: 'TrendingUp',
      title: 'Results',
      description: 'Every project is built with performance and conversion in mind.'
    }
  ],

  ctaButton: {
    text: 'Start your project',
    link: '#contact'
  }
};

// ====================================
// SEÇÃO SKILLS (Habilidades)
// ====================================
export const skillsContent = {
  title: 'Skills',
  subtitle: 'Modern. Fast. Effective.',

  skills: [
    { id: 1, name: 'HTML5',            icon: 'html5',     color: '#E34F26' },
    { id: 2, name: 'CSS3',             icon: 'css3',      color: '#1572B6' },
    { id: 3, name: 'JavaScript',       icon: 'js',        color: '#F7DF1E' },
    { id: 4, name: 'React',            icon: 'react',     color: '#61DAFB' },
    { id: 5, name: 'TypeScript',       icon: 'ts',        color: '#3178C6' },
    { id: 6, name: 'Git',              icon: 'git',       color: '#F05032' },
    { id: 7, name: 'GitHub',           icon: 'github',    color: '#ffffff' },
    { id: 8, name: 'Responsive Design',icon: 'responsive',color: '#a855f7' }
  ]
};

// ====================================
// SEÇÃO QUOTES (Citações)
// ====================================
export const quotesContent = {
  quote1: 'A well-designed website is more than a visual asset — it\'s a tool for growth.',
  quote2: 'Design meets development. Strategy meets execution.'
};

// ====================================
// SEÇÃO CONTACT (Contato)
// ====================================
export const contactContent = {
  title: 'Get in Touch',
  description: 'Web developers are shaping how we interact with the digital world every day. Thank you for exploring this journey with us! Whether you\'re aspiring to become one or looking to hire, the possibilities are endless.',

  socialLinks: [
    {
      id: 1,
      platform: 'Instagram',
      icon: 'Instagram',
      username: '@mstech.webdev',
      url: 'https://instagram.com/mstech.webdev'
    },
    {
      id: 2,
      platform: 'Email',
      icon: 'Mail',
      username: 'mstechweb8@gmail.com',
      url: 'mailto:mstechweb8@gmail.com'
    }
  ]
};

// ====================================
// NAVEGAÇÃO DO HEADER
// ====================================
export const navigationLinks = [
  { id: 1, label: 'About Us', href: '#about' },
  { id: 2, label: 'Projects', href: '#projects' },
  { id: 3, label: 'Contact', href: '#contact' }
];
