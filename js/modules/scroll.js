/**
 * Smooth Scroll Module
 * Handles navigation between sections with custom duration and easing.
 */
import { easeInOutQuad } from './utils.js';

export const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 900; // 800-1000ms range
      let start = null;

      /**
       * Animation step function
       * @param {number} timestamp 
       */
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(percentage));
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          // Update URL without jump
          window.history.pushState(null, null, targetId);
        }
      }

      window.requestAnimationFrame(step);
    });
  });
};
