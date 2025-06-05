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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.project-card, .section-title, .hero-text, .hero-image');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger animation after a short delay
  setTimeout(animateOnScroll, 100);
});

window.addEventListener('scroll', animateOnScroll);