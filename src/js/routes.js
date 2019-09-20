/**
* Import
*/
import state from './state.js';
import renderLogin from './components/login.js';
import renderNavbar from './components/navbar.js';
import renderLanding from './components/landing.js';
import renderProducts from './components/products.js';
import renderBeerList from './components/beerList.js';
import renderPaginador from './components/paginator.js';
import { toggleClass } from './ui.js';

/**
* Ruta principal
*/
page('/login', async () => {
    try {
        // Clean screen
        const app = document.querySelector('#app');
        app.innerHTML = '';
        const header = document.querySelector('header');
        header.innerHTML = '';
        const footer = document.querySelector('footer');
        footer.style.display = "none";
        // Render login
        renderLogin(app);
    } catch (error) {
        alert(error);
    }
});

/**
* Ruta con las cervezas
*/
page('/', () => {
    if (state.isAuthenticated()) {
        // Get DOM nodes
        const header = document.querySelector('#header');
        const app = document.querySelector('#app');
        const footer = document.querySelector('footer');
        // Render home
        renderNavbar(header);
        app.innerHTML = '';
        renderLanding(app);
        renderProducts(app);
        footer.style.display = "block";
        // Get beers from API and render in UI
        state.loading = true;
        state.loadBeers()
        .then(results => {
            if (results.success) {
                // Fetch DOM nodes
                const loader = document.querySelector('.loader-api');
                const beers = document.querySelector('#beers-list');
                const paginator = document.querySelector('#paginator');
                // Manipulate DOM
                toggleClass(loader)('d-none');   
                renderBeerList(beers);
                renderPaginador(paginator);
            } else {
                console.log(result);
            }
        });
    } else {
        page('/login');
    }
});

/**
* Ruta con el detalle
*/
page('/detail/:id', (ctx) => {
    if (state.isAuthenticated()) {
        // Render detail
        const { params: { id } } = ctx;
        alert(id);   
        const footer = document.querySelector('footer');
        footer.style.display = "block";
    } else {
        page('/');
    }
});

/**
* Ruta con el carrito de la compra
*/
page('/cart', () => {
    if (state.isAuthenticated()) {
        alert(id);
    } else {
        page('/login');
    }
});

/**
* Ejecuto el router
*/
page();