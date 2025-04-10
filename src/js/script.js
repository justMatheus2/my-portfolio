function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  const menuCheckbox = document.getElementById('menu-hamburguer');
  const menuLinks = document.querySelectorAll('nav ul a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuCheckbox.checked = false;
    });
  });