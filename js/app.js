/**
 * iNova X Landing Page Main Application
 * 
 * Entry point for initializing all functional modules.
 * This script follows the ES6 modules pattern and uses revealing logic.
 * 
 * @author iNova Team
 * @version 1.0.0
 */

import { injectFunctionalStyles } from './modules/utils.js';
import { initMenu } from './modules/menu.js';
import { initSmoothScroll } from './modules/scroll.js';
import { initFormValidation } from './modules/form.js';
import { initCTA } from './modules/cta.js';
import { initScrollAnimations } from './modules/animations.js';
import { initCounter } from './modules/counter.js';
import { initModal } from './modules/modal.js';

/**
 * Main application initialization
 */
const initApp = () => {
  try {
    // 1. Inject functional styles first to ensure functionality
    injectFunctionalStyles();

    // 2. Initialize all functional modules
    initMenu();
    initSmoothScroll();
    initFormValidation();
    initCTA();
    initScrollAnimations();
    initCounter();
    initModal();

    console.log('iNova X Landing Page dynamic behavior initialized successfully.');
  } catch (error) {
    console.error('Initialization error in iNova X Application:', error);
  }
};

// Start application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);
