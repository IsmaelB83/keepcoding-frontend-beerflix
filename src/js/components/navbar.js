/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<nav class='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
                <a class='navbar-brand' href='#'>
                    <img src="/public/logo_beerflix.png" alt="logo">
                </a>
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item active'>
                            <a class='nav-link' href='#landing'>Home <span class='sr-only'>(current)</span></a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#products'>Product</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#about'>About us</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <ul class='navbar-nav navbar-nav--right'>
                        <li class='nav-item'>
                            <a class='nav-link nav-link--button js--cart' href='#'><i class="fas fa-shopping-cart"></i><small> 0 items</small></a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link nav-link--button js--logout' href='#'><i class="fas fa-sign-out-alt"></i><small> logout</small></a>
                        </li>
                    </ul>
                </div>
            </nav>`;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent, checkoutEventHandler, logoutEventHandler) => {
    // Añado el componente
    parent.innerHTML = htmlTemplate({numItems: 10});
    // Eventos
    const cart = document.querySelector('.js--cart');
    cart.addEventListener('click', checkoutEventHandler);
    const logoutNode = document.querySelector('.js--logout');
    logoutNode.addEventListener('click', logoutEventHandler);
}

export default render;

