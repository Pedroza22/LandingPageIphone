/**
 * Form Validation Module
 * Real-time validation for name, email, phone with dynamic error messages.
 */
export const initFormValidation = () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone')
  };

  /**
   * Shows error message for an input
   * @param {HTMLElement} input 
   * @param {string} message 
   */
  const showError = (input, message) => {
    input.classList.add('input-error');
    input.classList.remove('input-success');
    
    let errorEl = input.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains('error-message')) {
      errorEl = document.createElement('span');
      errorEl.classList.add('error-message');
      input.parentNode.insertBefore(errorEl, input.nextSibling);
    }
    errorEl.textContent = message;
  };

  /**
   * Shows success state for an input
   * @param {HTMLElement} input 
   */
  const showSuccess = (input) => {
    input.classList.remove('input-error');
    input.classList.add('input-success');
    
    const errorEl = input.nextElementSibling;
    if (errorEl && errorEl.classList.contains('error-message')) {
      errorEl.remove();
    }
  };

  /**
   * Validates an input based on type
   * @param {HTMLElement} input 
   */
  const validateInput = (input) => {
    const value = input.value.trim();
    
    if (input.id === 'name') {
      if (value.length < 3) {
        showError(input, 'El nombre debe tener al menos 3 caracteres.');
        return false;
      }
    } else if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(input, 'Introduce un correo electrónico válido.');
        return false;
      }
    } else if (input.id === 'phone') {
      const phoneRegex = /^[0-9+]{9,15}$/;
      if (!phoneRegex.test(value)) {
        showError(input, 'Introduce un número de teléfono válido (9-15 dígitos).');
        return false;
      }
    }

    if (input.required && !value) {
      showError(input, 'Este campo es obligatorio.');
      return false;
    }

    showSuccess(input);
    return true;
  };

  // Real-time validation
  Object.values(inputs).forEach(input => {
    if (!input) return;
    
    input.addEventListener('input', () => validateInput(input));
    input.addEventListener('blur', () => validateInput(input));
  });

  // Prevent submit on error
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    Object.values(inputs).forEach(input => {
      if (input && !validateInput(input)) isValid = false;
    });

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Procesando...';
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.textContent = '¡Reservado con éxito!';
        submitBtn.style.background = '#34c759';
        
        // Reset after 3 seconds
        setTimeout(() => {
          form.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          Object.values(inputs).forEach(input => {
            if (input) input.classList.remove('input-success');
          });
        }, 3000);
      }, 1500);
    }
  });
};
