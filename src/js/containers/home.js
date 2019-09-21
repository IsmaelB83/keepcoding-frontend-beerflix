/**
 * Imports
 */
import state from '../state/index.js';
import renderNavbar from '../components/navbar.js';
import renderLanding from '../components/landing.js';
import { render as renderBeers, updateBeers } from './beers.js';

/**
 * Prepare page to render login
 */
const render = () => {
  // Get DOM nodes
  const header = document.querySelector('#header');
  const app = document.querySelector('#app');
  const footer = document.querySelector('footer');
  // Render home
  renderNavbar(header);
  app.innerHTML = '';
  renderLanding(app);
  renderBeers(app);
  footer.style.display = 'block';
  // Configure component
  componentMounted();
};

/**
 * Once rendered, this function adds the logic to the new component
 */
const componentMounted = () => {
  // Cada vez que se renderiza home, es necesario solicitar las beers al backend
  state.loadBeers().then(results => updateBeers(results));
};

export default render;
