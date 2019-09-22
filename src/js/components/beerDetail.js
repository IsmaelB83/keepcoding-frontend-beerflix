/**
 * Template que genera el component de listado de cervezas
 * @param {Object} beer Objeto beer a renderizar
 */
const htmlTemplate = beer => {
  // Ingredient boxes
  let boxhtml = '';
  for (let prop in beer.ingredients) {
    boxhtml += `<div class="detail-box"><h6>${prop}</h6><ul>`;
    if (typeof beer.ingredients[prop] === 'object') {
      boxhtml += beer.ingredients[prop].map(i => `<li>${i.name}</li> `).join('');
    } else if (typeof beer.ingredients[prop] === 'string') {
      boxhtml += `<li>${beer.ingredients[prop]}</li>`;
    }
    boxhtml += '</ul></div>';
  }
  // Detail html
  const html = `<!-- Header section-->
                <h3 class='section-subTitle detail-subTitle'>
                    By ${beer.contributedBy} on ${beer.firstBrewed}
                </h3>
                <h2 class='section-mainTitle'>
                    ${beer.name}
                    <small>
                        <i class="far fa-thumbs-up"></i>
                        ${beer.likes !== '' ? beer.likes : 0}
                        <span> likes</span>
                    <small>
                </h2>
                    <!-- Header section-->
                <article class='detail'>
                    <div class='detail-header row'>
                        <div class='detail-img col-12 col-sm-4 col-md-3'>
                            <img src='${beer.image}' alt='beer'>
                        </div>
                        <div class='detail-info col-12 col-sm-8 col-md-9'>
                            <p class='detail-price'><span class='currency'>$</span>${beer.price}</p>
                            <p class='detail-description'>${beer.description}</p>
                            <div class='detail-order'>
                                <input class='detail-quantity' type='number' maxlength="2" value="1">
                                <button id='btnAddCart' class='detail-button mr-2' data-id='${beer.beerId}'>
                                    <i class="fas fa-cart-plus"></i> Add to cart
                                </button>
                                <button id='btnLike' class='detail-button' data-id='${beer.beerId}'>
                                    <i class="far fa-thumbs-up"></i> Like
                                </button>
                            </div>
                        </div>           
                    </div>
                    <div class='detail-footer row'>
                        <div class='detail-section col-12'>
                            <h4 class='detail-section--title'>Brewers Tip</h4>
                            <p class='detail-section--content'>${beer.brewersTips}</p>        
                        </div>
                        <div class='detail-section col-12'>
                            <h4 class='detail-section--title'>Ingredients</h4>
                            <div class='detail-boxes'>
                                ${boxhtml} 
                            </div>
                        </div>
                        <div id='comments' class='detail-section col-12 mt-4'>
                            <h4 class='detail-section--title'>Comments 
                                <small>
                                    <i class="far fa-comments"></i> 
                                    ${beer.comment ? beer.comment.length : 0}
                                </small>
                            </h4>
                            <form id="formComment" class="form-comment" data-id='${beer.beerId}'>
                                <textarea id="comment" type="text" placeholder="Comment" required></textarea>
                                <button type="submit">Post Comment</button>
                            </form>
                            <div class='comment-box'>
                            </div>
                        </div>
                    </div>
                </article>
            `;
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

/**
 * Metodo que asocia los event listeners pasados como parametros a los objetos que generan los eventos
 * La idea de no tener los listeners definidos en el componente. Es hacer que este componente sea lo
 * más desacoplado posible de la lógica de negocio que gestiona el evento (definida en el container).
 * Trato de aplicar algo similar al patrón component/container de REACT.
 * @param {*} likeBeer Event listener qeu gestiona un like a una beer
 * @param {*} addToCart Event listener que gestiona añadir una beer a la cesta de la compra
 * @param {*} commentBeer Event listener que gestiona añadir un comentario a la beer
 */
const addListeners = (likeBeer, addToCart, commentBeer) => {
  const formComment = document.querySelector('#formComment');
  const buttonAddCart = document.querySelector('#btnAddCart');
  const buttonLike = document.querySelector('#btnLike');
  formComment.addEventListener('submit', commentBeer);
  buttonAddCart.addEventListener('click', addToCart);
  buttonLike.addEventListener('click', likeBeer);
};

/**
 * Exports
 */
export { render, addListeners };
