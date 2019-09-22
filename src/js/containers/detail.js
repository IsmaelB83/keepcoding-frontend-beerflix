/**
 * Imports
 */
import state from '../state/index.js';
import renderLoader from '../components/loader.js';
import renderNavbar from '../components/navbar.js';
import { render as renderDetail, addListeners as addListenersDetail } from '../components/beerDetail.js';
import renderComments from '../components/comments.js';

const templateHTML = () => {
  return `<section id='product' class='container section section-detail'>
            <div class='row'>
              <div id='detailContent' class='col-12'>

              </div>
            </div>
          </section>`;
};

/**
 * Prepare page to render login
 */
const render = id => {
  // Pido el detalle a la API a través del state
  const promise = state.loadBeer(id);
  // Renderizo al pantalla excpeto el beer
  const header = document.querySelector('#header');
  renderNavbar(header);
  const app = document.querySelector('#app');
  app.innerHTML = templateHTML();
  const container = document.querySelector('#detailContent');
  renderLoader(container);
  const footer = document.querySelector('footer');
  footer.style.display = 'block';
  // El detalle de la cerveza se renderiza cuando lo devuelva la API
  promise.then(result => {
    if (result.success) {
      // Renderizo el detail
      renderDetail(container, result.beer);
      const comments = document.querySelector('.comment-box');
      renderComments(comments, result.beer.comment);
      addListenersDetail(likeBeerEventHandler, addToCartEventHandler, commentBeerEventHandler);
    } else {
      // eslint-disable-next-line no-undef
      page('/');
    }
  });
};

/**
 * Handle like beer
 */
const likeBeerEventHandler = ev => {
  ev.preventDefault();
  console.log(ev.currentTarget);
};

/**
 * Handle add to cart
 */
const addToCartEventHandler = ev => {
  ev.preventDefault();
  console.log(ev.currentTarget);
};

/**
 * Handle comment on beer
 */
const commentBeerEventHandler = ev => {
  ev.preventDefault();
  console.log(ev.currentTarget);
};

export default render;
