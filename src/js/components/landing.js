/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<div id='landing' class='landing'>
                <picture class='hero-background'>
                    <source srcset='/public/heropanel@tablet.jpg 320w, /public/heropanel@desktop.jpg 768w, ' media='(min-width: 768px)' />
                    <source srcset='/public/heropanel@tablet.jpg' media='(min-width: 320px)' />
                    <img src='/public/heropanel-500.jpg' alt='beerflix' />
                </picture>
                <div class='landing-hero'>
                    <h1 class='title'>Brought to you by <span>Beerflix</span></h1>
                    <div class='landing-buttons'>
                        <a class='btn btn-lg btn-main btn-main--fill' href='#products'>Products</a>
                        <a class='btn btn-lg btn-main' href='#about'>About us</a>
                    </div>
                </div>
            </div>`;
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

