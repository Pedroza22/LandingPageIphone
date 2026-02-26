/**
 * Modal Module
 * Handles opening/closing of the modal with smooth transitions and body scroll prevention.
 */
export const initModal = () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.modal-close');
  const modalCTA = document.getElementById('modalCTA');

  if (!modal) return;

  /**
   * Opens the modal
   */
  const openModal = () => {
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  /**
   * Closes the modal
   */
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  // Close on button click
  closeBtn.addEventListener('click', closeModal);

  // Close on CTA click
  modalCTA.addEventListener('click', () => {
    closeModal();
    // Scroll to contact form
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Close on click outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Show modal after 5 seconds of browsing
  setTimeout(openModal, 5000);
};
