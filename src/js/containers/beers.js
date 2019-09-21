/**
 * Imports
 */
import state from '../state/index.js';
import renderBeerList from '../components/beerList.js';
import renderPaginator from '../components/paginator.js';
import { toggleClass } from '../ui.js';


/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<section id='products' class='container section'>
                <div class='row'>
                    <div class='col-12'>
                        <!-- Header section-->
                        <h3 class='section-subTitle'>Home delivery</h3>
                        <h2 class='section-mainTitle'>Enjoy your beer</h2>
                        <p class='section-summary'>
                            We have a huge catalog of craft beers. Have a sit, make your order and enjoy your drink as soon as we deliver it to you in the comfort of your home
                        </p>

                        <!-- Form search -->
                        <form id='searchForm' method='post' class='form-search'>
                            <input type='text' id='inputSearch' class='form-control input--brown' placeholder='name'>
                            <input type='date' id='inputDate' class='form-control input--brown' placeholder='brew date' width='150px'>
                            <button type='submit' class='button-brown button-brown--fill'><i class='fas fa-search'></i></button>
                        </form>
                        
                        <!-- Grid -->
                        <div id='beers-list'>
                        </div>

                        <!-- Loader -->
                        <div class='loader-api'>
                            <img src='/public/loading.gif' alt=''>
                            <p id='loader-text'>fetching data from API...</p>
                        </div>

                        <!-- Paginator -->
                        <div id='paginator' class='paginator'>
                        </div>
                    </div>
                </div>
            </section>`;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent) => {
    // Añado el componente
    state.loading = true;
    parent.innerHTML += htmlTemplate();
}

/**
 * Recarga la sección de beers cuando es solicitado por el usuario y la API devuelve los datos.
 * Esta función se encarga de mostrar unicamente los max. resultados configurados en la aplicación
 * (ver state.js), y el resto serán paginados
 * @param {Array} beers Array con la información de las beers a mostrar
 */
const updateBeers = (beers) => {
    // Fetch DOM elements
    const container = document.querySelector('#beers-list');
    const paginator = document.querySelector('#paginator');
    const loader = document.querySelector('.loader-api');
    // Pagino las cervezas a mostrar, las renderizo y también el paginador
    const start = state.currentPage * state.beersPerPage;
    const end = start + state.beersPerPage;
    const paginatedBeers = beers.slice(start, end);
    renderBeerList(container, paginatedBeers);
    renderPaginator(paginator, state.currentPage, beers.length, state.beersPerPage);
    // Add event listeners
    const links = paginator.querySelectorAll('.page-link:not(.active)');
    links.forEach(link => {
        link.addEventListener('click', paginatorClick);
    });
    // Hide loader
    toggleClass(loader)('d-none');       
}

/**
 * Cuando se hace click en un elemento del paginador
 * @param {*} ev Evento generado en el click
 */
const paginatorClick = (ev) => {
    // Prevent navigation
    ev.preventDefault();
    // Show loader
    const loader = document.querySelector('.loader-api');
    toggleClass(loader)('d-none');       
    // Update page and render beers
    const page = ev.currentTarget.dataset.page;
    state.currentPage = parseInt(page);
    updateBeers(state.beers);
}

/**
 * Export modules
 */
export {
    render,
    updateBeers
}