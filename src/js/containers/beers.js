/**
 * Imports
 */
import state from '../state/index.js';
import { render as renderBeerList, addListeners as addListenersBeers } from '../components/beerList.js';
import { render as renderPaginator, addListeners as addListenersPage } from '../components/paginator.js';
import { toggleClass } from '../ui/ui.js';

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
                    <p class='section-summary section-summary--small'>
                        You can search beers by name and/or the interval of brewed dates (if you fill just from or to, the app will do the rest for you)
                    </p>
                    <form id='searchForm' class='form-search'>
                        <div class='row'>    
                          <div class='col'>
                            <label for="inputSearch">Name</label>
                            <input type='text' id='inputSearch' class='form-control input--brown' placeholder='filter by name'>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col'>
                            <label for="fromDate">Brewed from</label>
                            <input type='date' id='fromDate' class='form-control input--brown'>
                          </div>
                          <div class='col'>
                            <label for="toDate">To</label>
                            <input type='date' id='toDate' class='form-control input--brown'>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col'>
                            <button type='submit' class='button-brown button-brown--fill'><i class='fas fa-search'></i> search</button>
                          </div>
                        </div>
                    </form>
                    
                    <!-- Grid -->
                    <div id='beers-list'>
                    </div>

                    <!-- Loader -->
                    <div class='loader-api'>
                        <img src='/public/img/loading.gif' alt=''>
                        <p id='loader-text'>fetching data from API...</p>
                    </div>

                    <!-- Paginator -->
                    <div id='paginator' class='paginator'>
                    </div>
                </div>
            </div>
        </section>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = parent => {
  // Añado el componente
  parent.innerHTML += htmlTemplate();
};

/**
 * Recarga la sección de beers cuando es solicitado por el usuario y la API devuelve los datos.
 * Esta función se encarga de mostrar unicamente los max. resultados configurados en la aplicación
 * (ver state.js), y el resto serán paginados
 * @param {Array} beers Array con la información de las beers a mostrar
 */
const updateBeers = beers => {
  // Fetch DOM elements
  const container = document.querySelector('#beers-list');
  const paginator = document.querySelector('#paginator');
  const loader = document.querySelector('.loader-api');
  const form = document.querySelector('#searchForm');
  // Pagino las cervezas a mostrar, las renderizo y también el paginador
  const start = state.currentPage * state.beersPerPage;
  const end = start + state.beersPerPage;
  const paginatedBeers = beers.slice(start, end);
  renderBeerList(container, paginatedBeers);
  renderPaginator(paginator, state.currentPage, beers.length, state.beersPerPage);
  // Add event listeners
  addListenersPage(paginatorClick);
  addListenersBeers(addToCartEventHandler);
  form.addEventListener('submit', searchEventHandler);
  // Hide loader
  toggleClass(loader)('d-none');
};

/**
 * Cuando se hace click en un elemento del paginador
 * @param {*} ev Evento generado en el click
 */
const paginatorClick = ev => {
  // Prevent navigation
  ev.preventDefault();
  // Show loader
  const loader = document.querySelector('.loader-api');
  toggleClass(loader)('d-none');
  // Update page and render beers
  const { page } = ev.currentTarget.dataset;
  state.currentPage = parseInt(page);
  updateBeers(state.beers);
};

/**
 * Event handler del submit de busqueda
 * @param {Event} ev Evento submit
 */
const searchEventHandler = ev => {
  // Prevent default submit behaviour
  ev.preventDefault();
  // Definitions
  const loader = document.querySelector('.loader-api');
  const name = document.querySelector('#inputSearch').value;
  const container = document.querySelector('#beers-list');
  let fromDate = document.querySelector('#fromDate').value;
  let toDate = document.querySelector('#toDate').value;
  // Ajusto en caso de que el usuario sólo haya rellando una de las fechas
  if (fromDate === '' && toDate !== '') {
    fromDate = '01/01/1900';
  } else if (toDate === '' && fromDate !== '') {
    toDate = '01/01/9999';
  }
  // Call API to get beers with filter and then update state
  container.innerHTML = '';
  toggleClass(loader)('d-none');
  const promise = state.loadBeers(name, fromDate, toDate);
  promise.then(results => {
    updateBeers(results);
  });
};

/**
 * Handler like beer
 */
const addToCartEventHandler = ev => {
  ev.preventDefault();
  console.log(ev.currentTarget.dataset);
};

/**
 * Export modules
 */
export { render, updateBeers };
