/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = ({
    currentPage,
    totalBeers,
    beersPerPage
}) => {
    // Tantas páginas como el total de cervezas del state / numero de cervezas por página
    const numPages = Math.floor(totalBeers / beersPerPage);
    let html = '';
    for (let i = 0; i < numPages; i++) {
        html += `<li class='page-item'>
                    <a class='page-link ${i===currentPage?'active':''} href='#' data-page='${i}'>${i+1}</a>
                 </li>`
    }
    // Retorno el paginador
    return `<ul class='pagination'>
                ${html}
            </ul>`;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent, currentPage, totalBeers, beersPerPage) => {
    // Añado el componente
    parent.innerHTML = htmlTemplate({ currentPage, totalBeers, beersPerPage });
}

export default render;