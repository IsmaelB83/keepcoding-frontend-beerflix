/**
 * Imports
 */
import state from '../state.js';
import renderBeerList from './beerList.js';

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
                        <form id='searchForm' method='post' class='form-inline'>
                            <div class='form-group mr-1 mb-2'>
                                <input type='text' id='inputSearch' class='form-control form-control-sm' placeholder='name'>
                            </div>
                            <div class='form-group mr-1 mb-2'>
                                <input type='date' id='inputDate' class='form-control form-control-sm' placeholder='brew date' width='150px'>
                            </div>
                            <button type='submit' class='btn btn-sm btn-primary mb-2'><i class='fas fa-search'></i></button>
                        </form>
                        
                        <!-- Grid -->
                        <div id='beers-list'>
                        </div>

                        <!-- Loader -->
                        <div class='loader-api ${state.loading?'':'d-none'}'>
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
    parent.innerHTML += htmlTemplate();
}

export default render;