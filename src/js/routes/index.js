/**
* Import
*/
import state from '../state/index.js';
import renderLogin from '../containers/login.js';
import renderHome from '../containers/home.js';


/**
* Ruta principal
*/
page('/login', async () => {
    try {
        renderLogin();
    } catch (error) {
        // Log
        const aux = `ERROR page('/login') ==> ${error.toString()}`;
        console.log(aux)
        alert(aux);
    }
});

/**
* Ruta con las cervezas
*/
page('/', () => {
    try {
        // Si está autenticado renderizo el home, si no redirijo a login
        if (state.isAuthenticated()) {
            renderHome();
        } else {
            page('/login');
        }
    } catch (error) {
        // Log
        const aux = `ERROR page('/login') ==> ${error.toString()}`;
        console.log(aux)
        alert(aux);
    }
});

/**
* Ruta con el detalle
*/
page('/detail/:id', (ctx) => {
    try {
        // Si está autenticado renderizo el home, si no redirijo a login
        if (state.isAuthenticated()) {
            const { params: { id } } = ctx;
            //renderDetail(id);
        } else {
            page('/login');
        }
    } catch (error) {
        // Log
        const aux = `ERROR page('/login') ==> ${error.toString()}`;
        console.log(aux)
        alert(aux);
    }
});

/**
* Ruta con el carrito de la compra
*/
page('/cart', () => {
    try {
        // Si está autenticado renderizo el home, si no redirijo a login
        if (state.isAuthent) {  
            //renderCart();        
        } else {
            page('/login');        
        }
    } catch (error) {
        // Log
        const aux = `ERROR page('/login') ==> ${error.toString()}`;
        console.log(aux)
        alert(aux);
    }
});

/**
* Ejecuto el router
*/
page();