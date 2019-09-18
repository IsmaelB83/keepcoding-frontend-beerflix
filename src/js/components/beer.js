/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = ({
    urlDetail,
    urlImage,
    title,
    price,
    description,
    handlerAddCart
}) => {
    return  `<div class='beer'>
                <div class='beer-top'>
                    <a href='${urlDetail}'>
                        <img src='${urlImage}' class='beer-img' alt='beer'>
                    </a>
                </div>
                <div class='beer-body'>
                    <h5 class='beer-title'><a href='${urlDetail}'>${title}</a></h5>                                        
                    <div class='beer-middle'>
                        <p class='beer-price'><span class='beer-currency'>$</span>${price}</p>
                        <a href='#' onClick='${handlerAddCart}' class='beer-btn'>add to cart</a>       
                    </div>
                    <p class='beer-text'>${description.subString(0,30) + '...'}</p>
                </div>
            </div>`;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent, object) => {
    // Añado el componente
    parent.innerHTML += htmlTemplate({...object});
}

export default render;

