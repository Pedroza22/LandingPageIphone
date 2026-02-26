/**
 * Utility module for common functions and style injection
 */

/**
 * Injects necessary functional styles into the document head.
 * This ensures we don't need to modify the existing main.css file.
 */
export const injectFunctionalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* Menu Styles */
    .menu-toggle {
      cursor: pointer;
      font-size: 1.5rem;
      z-index: 1001;
      transition: transform 0.3s ease;
    }
    
    .menu-toggle.active {
      transform: rotate(90deg);
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.98);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        z-index: 1000;
      }

      .nav-links.active {
        right: 0;
      }
    }

    /* Form Validation Styles */
    .input-error {
      border: 2px solid #ff3b30 !important;
    }
    
    .input-success {
      border: 2px solid #34c759 !important;
    }

    .error-message {
      color: #ff3b30;
      font-size: 0.8rem;
      margin-top: -10px;
      margin-bottom: 10px;
      text-align: left;
      display: block;
    }

    /* CTA Loading State */
    .cta-btn.loading {
      opacity: 0.7;
      pointer-events: none;
      position: relative;
    }

    /* Animations */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }

    .modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      transform: scale(0.8);
      transition: all 0.3s ease;
      position: relative;
    }

    .modal-overlay.active .modal-content {
      transform: scale(1);
    }

    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      font-size: 1.5rem;
    }

    body.no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Easing function for smooth scroll
 * @param {number} t - Time
 * @returns {number}
 */
export const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
