/**
 * Scroll Animations Module
 * Configures animations triggered when elements enter the viewport using Intersection Observer API.
 */
export const initScrollAnimations = () => {
  const options = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.2 // 20% offset as requested
  };

  /**
   * Observer callback function
   * @param {IntersectionObserverEntry[]} entries 
   * @param {IntersectionObserver} observer 
   */
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation executes once
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  // Targets for animation
  const targets = document.querySelectorAll('.section h2, .section p, .section img, .hero h1, .hero h2, .hero button');

  targets.forEach(target => {
    target.classList.add('reveal');
    observer.observe(target);
  });
};
