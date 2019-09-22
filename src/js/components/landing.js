/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
  return `<div class='landing'>
                <div class='filter'></div>
                <picture class='hero-background'>
                    <source srcset='/public/img/heropanel@tablet.jpg 320w, /public/img/heropanel@desktop.jpg 768w, ' media='(min-width: 1024px)' />
                    <source srcset='/public/img/heropanel@tablet.jpg' media='(min-width: 768px)' />
                    <img src='/public/img/heropanel-500.jpg' alt='beerflix' />
                </picture>
                <div class='landing-hero'>
                    <div class='landing-titles'>
                        <img src='/public/img/logo_beerflix.png' alt='beerflix' />
                        <h1>Handcrafted Beer</h1>
                        <h2>"Pide tus cervezas desde la comodidad del sofa"</h2>
                    </div>
                    <a class='btn btn-lg' href='#products'>Nuestros productos</a>
                </div>
            </div>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = parent => {
  // Añado el componente
  parent.innerHTML += htmlTemplate();
};

export default render;
