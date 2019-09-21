/**
 * Import
 */
import state from '../state/index.js';
import renderLogin from '../containers/login.js';
import renderDetail from '../containers/detail.js';
import renderHome from '../containers/home.js';

/**
 * Ruta principal
 */
// eslint-disable-next-line no-undef
page('/login', async () => {
  try {
    renderLogin();
  } catch (error) {
    // Log
    const aux = `ERROR page('/login') ==> ${error.toString()}`;
    console.log(aux);
    alert(aux);
  }
});

/**
 * Ruta con las cervezas
 */
// eslint-disable-next-line no-undef
page('/', () => {
  try {
    // Si está autenticado renderizo el home, si no redirijo a login
    if (state.isAuthenticated()) {
      renderHome();
    } else {
      // eslint-disable-next-line no-undef
      page('/login');
    }
  } catch (error) {
    // Log
    const aux = `ERROR page('/') ==> ${error.toString()}`;
    console.log(aux);
    alert(aux);
  }
});

/**
 * Ruta con el detalle
 */
// eslint-disable-next-line no-undef
page('/detail/:id', ctx => {
  try {
    // Si está autenticado renderizo el home, si no redirijo a login
    if (state.isAuthenticated()) {
      const {
        params: { id }
      } = ctx;
      renderDetail(id);
    } else {
      // eslint-disable-next-line no-undef
      page('/login');
    }
  } catch (error) {
    // Log
    const aux = `ERROR page('/detail') ==> ${error.toString()}`;
    console.log(aux);
    alert(aux);
  }
});

/**
 * Ruta con el carrito de la compra
 */
// eslint-disable-next-line no-undef
page('/cart', () => {
  try {
    // Si está autenticado renderizo el home, si no redirijo a login
    if (state.isAuthent) {
      //renderCart();
    } else {
      // eslint-disable-next-line no-undef
      page('/login');
    }
  } catch (error) {
    // Log
    const aux = `ERROR page('/login') ==> ${error.toString()}`;
    console.log(aux);
    alert(aux);
  }
});

/**
 * Ejecuto el router
 */
// eslint-disable-next-line no-undef
page();
