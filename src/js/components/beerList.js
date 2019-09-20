/**
 * Template que genera una card de cerveza de tipo small
 */
const htmlBeer = (beer) => {
    return  `<div class='beer'>
                <div class='beer-top'>
                    <a href='/detail/${beer.beerId}'>
                        <img src='${beer.image}' class='beer-img' alt='beer'>
                    </a>
                </div>
                <div class='beer-body'>
                    <h5 class='beer-title'><a href='/detail/${beer.beerId}'>${beer.name}</a></h5>                                        
                    <div class='beer-middle'>
                        <p class='beer-price'><span class='beer-currency'>$</span>${beer.price}</p>
                        <a href='#' onClick='' class='beer-btn'>add to cart</a>       
                    </div>
                    <p class='beer-text'>${beer.description.substring(0,150) + '...'}</p>
                </div>
            </div>`;
}

/**
 * Template que genera el listado de cervezas
 */
const htmlBeersList = (beers) => {
    // Obtengo los arrays a mostrar
    const paginatedBeers = beers.slice(state.currentPage * state.beersPerPage, state.beersPerPage);
    // Loop trough each beer adding content
    let html = `<ul class='beer-grid'>`;
    html += paginatedBeers.map(beer => `<li class='beer-item'>${htmlBeer(beer)}</li>`).join('');
    html += `</ul>`;
    return html;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent) => {
    // Añado el componente    
    parent.innerHTML += htmlBeersList(state.beers);
}

export default render;

