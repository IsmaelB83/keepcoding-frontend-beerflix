/**
* Import
*/
import state from './state.js';
import renderLogin from './components/login.js';
import renderNavbar from './components/navbar.js';
import renderLanding from './components/landing.js';
import renderProducts from './components/products.js';
import { toggleLoader } from './ui.js'


/**
* Ruta principal
*/
page('/login', async () => {
    try {
        // Render login
        const app = document.querySelector('#app');
        app.innerHTML = '';
        const header = document.querySelector('header');
        header.innerHTML = '';
        const footer = document.querySelector('footer');
        footer.style.display = "none";
        renderLogin(app);
        // Try to log in from Local storage
        const aux = localStorage.getItem('BeerflixIBA');
        const user = JSON.parse(aux);
        if (user) {
            toggleLoader('d-none');
            const auth = await state.login(user.email);
            toggleLoader('d-none');
            if (auth) {
                page('/');
                return;
            } else {
                localStorage.clear();
            }
        } 
    } catch (error) {
        alert(error);
    }
});

/**
* Ruta con las cervezas
*/
page('/', () => {
    if (state.isAuthenticated()) {
        const header = document.querySelector('#header');
        renderNavbar(header);
        const app = document.querySelector('#app');
        app.innerHTML = '';
        renderLanding(app);
        renderProducts(app);   
        const footer = document.querySelector('footer');
        footer.style.display = "block";
    } else {
        page('/login');
    }
});

/**
* Ruta con el detalle
*/
page('/detail/:id', (ctx) => {
    if (state.isAuthenticated()) {
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