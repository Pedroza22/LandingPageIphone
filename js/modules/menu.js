/**
 * Responsive Menu Module
 * Handles mobile menu toggle, click outside to close, and auto-close on link selection.
 */
export const initMenu = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (!menuToggle || !navLinks) return;

  /**
   * Toggles the menu state
   */
  const toggleMenu = () => {
    const isActive = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    document.body.classList.toggle('no-scroll', isActive);
    
    // Animate hamburger icon (☰ to ✕)
    menuToggle.textContent = isActive ? '✕' : '☰';
    menuToggle.setAttribute('aria-label', isActive ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  };

  /**
   * Closes the menu
   */
  const closeMenu = () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    document.body.classList.remove('no-scroll');
    menuToggle.textContent = '☰';
  };

  // Toggle on click
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close on link click
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
};
