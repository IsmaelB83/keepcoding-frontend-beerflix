/**
 * Imports
 */
import state from '../state/index.js';
import { toggleLoader } from '../ui/ui.js';

/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
  return `<nav class='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
                <a class='navbar-brand' href='/'>
                    <img src="/public/img/logo_beerflix.png" alt="logo">
                </a>
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item active'>
                            <a class='nav-link' href='/'>Home <span class='sr-only'>(current)</span></a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/'>Product</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/'>About us</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/'>Contact</a>
                        </li>
                    </ul>
                    <ul class='navbar-nav navbar-nav--right'>
                        <li class='nav-item'>
                            <a class='nav-link nav-link--button' href='/cart'><i class="fas fa-shopping-cart"></i><small> 0 items</small></a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link nav-link--button js--logout' href='#'><i class="fas fa-sign-out-alt"></i><small> logout</small></a>
                        </li>
                    </ul>
                </div>
            </nav>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = parent => {
  // Añado el componente
  parent.innerHTML = htmlTemplate({ numItems: 10 });
  // Eventos
  const logoutNode = document.querySelector('.js--logout');
  logoutNode.addEventListener('click', logoutEventHandler);
};

/**
 * Handler del evento de logout
 */
const logoutEventHandler = ev => {
  try {
    ev.preventDefault();
    toggleLoader('d-none');
    state.logout();
    // eslint-disable-next-line no-undef
    page('/login');
  } catch (error) {
    alert(error.message);
  } finally {
    setTimeout(() => toggleLoader('d-none'), 300);
  }
};

export default render;
