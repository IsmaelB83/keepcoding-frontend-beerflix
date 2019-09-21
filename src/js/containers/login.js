/**
 * Imports
 */
import { removeClass, addClass, toggleLoader } from '../ui/ui.js';
import renderLogin from '../components/login.js';
import state from '../state/index.js';

/**
 * Prepare page to render login
 */
const render = () => {
  // Fetch DOM elements
  const app = document.querySelector('#app');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  // Change UI
  app.innerHTML = '';
  header.innerHTML = '';
  footer.style.display = 'none';
  // Render login
  renderLogin(app);
  // Once renedered, the component is initialized
  componentMounted();
};

/**
 * Once rendered, this function adds the logic to the new component
 */
const componentMounted = () => {
  // Fetch DOM elements
  const form = document.querySelector('.login-form');
  const email = document.querySelector("input[type='email']");
  // Functions to change UI
  // Add listeners
  email.addEventListener('keydown', hideAlertEventHandler);
  form.addEventListener('submit', submitEventHandler);
};

/**
 * Oculta la alerta de error
 */
const hideAlertEventHandler = () => {
  // Definitions
  const alert = document.querySelector('.alert');
  const hideAlert = addClass(alert);
  // Cuando el input de mail es válido o empieza a tener algún valor
  const email = document.querySelector("input[type='email']");
  if (email.validity.valid || email.value === '') {
    hideAlert('d-none');
  }
};

/**
 * Controla el evento submit del formulario de login
 * @param {*} ev Evento submit
 */
const submitEventHandler = async ev => {
  try {
    // Prevent standard submit
    ev.preventDefault();
    // Definitions
    const email = document.querySelector("input[type='email']");
    toggleLoader('d-none');
    // Login
    if (await state.login(email.value)) {
      // eslint-disable-next-line no-undef
      page('/');
    } else {
      const alert = document.querySelector('.alert');
      const showAlert = removeClass(alert);
      alert.innerHTML = 'e-mail address not authorized';
      showAlert('d-none');
    }
  } catch (error) {
    const alert = document.querySelector('.alert');
    const showAlert = removeClass(alert);
    alert.innerHTML = error.message;
    showAlert('d-none');
  } finally {
    toggleLoader('d-none');
  }
};

export default render;
