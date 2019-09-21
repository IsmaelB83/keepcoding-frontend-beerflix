/**
 * Imports
 */
import state from '../state/index.js';
import renderNavbar from '../components/navbar.js';
import renderDetail from '../components/beerDetail.js';
import renderComments from '../components/comments.js';

/**
 * Prepare page to render login
 */
const render = id => {
  // Busco el beer asociado a ese id
  let beer = null;
  for (let i = 0; i < state.beers.length; i++) {
    const b = state.beers[i];
    if (b.beerId === parseInt(id)) {
      beer = b;
      break;
    }
  }
  // Si se ha encontrado la beer
  if (beer) {
    // Get DOM nodes
    const header = document.querySelector('#header');
    const app = document.querySelector('#app');
    const footer = document.querySelector('footer');
    // Render home
    renderNavbar(header);
    app.innerHTML = '';
    renderDetail(app, beer);
    footer.style.display = 'block';
    // Configure component
    componentMounted();
  } else {
    // eslint-disable-next-line no-undef
    page('/');
  }
};

/**
 * Once rendered, this function adds the logic to the new component
 */
const componentMounted = () => {
  // Render comments
  const comments = document.querySelector('#comments');
  renderComments(comments);
  // Add event listeners
};

export default render;
