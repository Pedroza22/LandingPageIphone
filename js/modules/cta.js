/**
 * CTA Button Module
 * Handles interactive button effects (hover, loading, confirmation).
 */
export const initCTA = () => {
  const ctaButtons = document.querySelectorAll('.cta-btn');

  ctaButtons.forEach(button => {
    // Interactive hover effects
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
      button.style.boxShadow = '0 10px 20px rgba(0, 113, 227, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    });

    // Post-click confirmation (for standalone CTA buttons)
    if (button.closest('form')) return; // Form module handles its own submit button

    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const originalText = button.textContent;
      
      // Loading state
      button.classList.add('loading');
      button.disabled = true;
      button.textContent = 'Cargando...';
      
      // Simulate action
      setTimeout(() => {
        button.classList.remove('loading');
        button.textContent = '¡Redirigiendo!';
        button.style.background = '#34c759';
        
        // Final state
        setTimeout(() => {
          button.disabled = false;
          button.textContent = originalText;
          button.style.background = '';
        }, 2000);
      }, 1000);
    });
  });
};
