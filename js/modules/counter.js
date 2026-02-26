/**
 * Animated Counter Module
 * Increments numbers from 0 to target value with proportional speed.
 */
export const initCounter = () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc means faster and smoother for small numbers
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => animateCounter(counter), 10);
    } else {
      counter.innerText = target;
    }
  };

  // Trigger when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 });

  counters.forEach(counter => observer.observe(counter));
};
