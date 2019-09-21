/**
 * Template que genera el component de listado de cervezas
 */
const htmlTemplate = beers => {
  return `<ul class='beer-grid'>
            ${beers
              .map(beer => {
                return `<li class='beer-item'>
                              <div class='beer'>
                                  <div class='beer-top'>
                                      <a href='/detail/${beer.beerId}'>
                                          <img src='${beer.image}' class='beer-img' alt='beer'>
                                          <p class='beer-price'><span class='beer-currency'>$</span>${beer.price}</p>
                                      </a>
                                  </div>
                                  <div class='beer-body'>
                                      <h5 class='beer-title'><a href='/detail/${beer.beerId}'>${beer.name}</a></h5>
                                      <div class='beer-middle'>
                                          <p class='beer-date'>${beer.firstBrewed}</p>
                                          <a href='#' onClick='' class='beer-btn'>add to cart</a>       
                                      </div>
                                      <p class='beer-text'>${beer.description.substring(0, 150) + '...'}</p>
                                  </div>
                              </div>
                          </li>`;
              })
              .join('')}
          </ul>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 * @param {Array} beers Listado de cervezas a renderizar
 */
const render = (parent, beers) => {
  parent.innerHTML = htmlTemplate(beers);
};

export default render;
