/**
 * Imports
 */
import { removeClass, addClass, toggleLoader } from '../ui/ui.js';
import { render as renderLogin, addListeners as addListenersLogin } from '../components/login.js';
import state from '../state/index.js';

/**
 * Plantilla de la web de login
 */
const templateHTML = () => {
  return `<!-- Formulario de login -->
          <div id='login' class='login' autocomplete='on'>
            <!-- Inject Landing JS here -->
          </div>`;
};

/**
 * Prepare page to render login
 */
const render = () => {
  // DOM containers
  const app = document.querySelector('#app');
  const header = document.querySelector('#header');
  const footer = document.querySelector('#footer');
  // Render
  app.innerHTML = templateHTML();
  const login = document.querySelector('#login');
  renderLogin(login);
  header.innerHTML = '';
  footer.innerHTML = '';
  // Listeners
  addListenersLogin(hideAlertEventHandler, submitEventHandler);
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
