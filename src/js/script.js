// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  
  // Save preference to localStorage
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Mobile menu functionality
const menuCheckbox = document.getElementById('menu-hamburguer');
const menuLinks = document.querySelectorAll('nav ul a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuCheckbox.checked = false;
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^=""]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.project-card, .section-title, .hero-text, .hero-image');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.project-card, .section-title, .hero-text, .hero-image');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  setTimeout(animateOnScroll, 100);
});

window.addEventListener('scroll', animateOnScroll);

// typeWriter animation
function typeWriterEffect() {
  const phrases = [
    "Web Developer",
    "Frontend Specialist",
    "React Enthusiast",
    "Matheus Sousa"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.querySelector('.typing-effect');
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
      typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  setTimeout(type, 1000);
}

window.addEventListener('DOMContentLoaded', typeWriterEffect);

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Loading screen
window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
    document.querySelector('.loading-screen').style.display = 'none';
  }, 1000);
});
// skills animation
function animateSkills() {
  const skills = document.querySelectorAll('.skill-item');
  
  skills.forEach((skill, index) => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = `all 0.5s ease ${index * 0.1}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  skills.forEach(skill => {
    observer.observe(skill);
  });
}

document.addEventListener('DOMContentLoaded', animateSkills);