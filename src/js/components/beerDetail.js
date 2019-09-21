/**
 * Template que genera el component de listado de cervezas
 */
const htmlTemplate = beer => {
  const html = `<section id='product' class='container section section-detail'>
                    <div class='row'>
                        <div class='col-12'>
                            <article class='detail'>
                                <div class='detail-header'>
                                    <div class='detail-img'>
                                        <img src='${beer.image}' alt='beer'>
                                    </div>
                                    <div class='detail-info'>
                                        <h3 class='detail-subTitle'>First brewed ${beer.firstBrewed}</h3>
                                        <h2 class='detail-mainTitle'>${beer.name}</h2>
                                        <p class='detail-price'><span class='currency'>$</span>${beer.price}</p>
                                        <p class='detail-description'>${beer.description}</p>
                                        <div class='detail-order'>
                                            <input class='detail-quantity' type='number' maxlength="2" value="1">
                                            <button class='detail-button'>Add to cart</button>
                                        </div>
                                    </div>           
                                </div>
                                <div class='detail-footer'>
                                    <div class='detail-section'>
                                        <h4 class='detail-section--title'>Brewers Tip</h4>
                                        <p class='detail-section--content'>${beer.brewersTips}</p>        
                                    </div>
                                    <div class='detail-section'>
                                        <h4 class='detail-section--title'>Ingredients</h4>
                                        <div class='detail-boxes'>
                                            
                                        </div>
                                    </div>
                                    <div id='comments' class='detail-section mt-4'>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>`;
  return html;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 * @param {Array} beer Cerveza que hay que detallar
 */
const render = (parent, beer) => {
  parent.innerHTML = htmlTemplate(beer);
};

export default render;

/* ${beer.ingredients
    .map(ing => {
      return `<div class="detail-box">
                  <h6>${ing}</h6>
                  <ul>
                      <li>Maris Otter Extra Pale</li>
                      <li>Caramalt</li>
                      <li>Munich</li>
                  </ul>
              </div>`;
    })
    .join('')} */
