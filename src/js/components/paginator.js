// Import
import state from '../state.js';

/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    // No beers no party
    if (!state.beers || state.beers.length < 1) {
        return '';
    }
    // Tantas páginas como el total de cervezas del state / numero de cervezas por página
    const numPages = Math.floor(state.beers.length / state.beersPerPage);
    let html = '';
    for (let i = 0; i < numPages; i++) {
        html += `<li class='page-item'><a class='page-link ${i===state.currentPage?'active':''} href='#' onClick='alert('clicked');'>${i+1}</a></li>`
    }
    // Retorno el paginador
    return `<ul class='pagination'>
                <li class='page-item'>
                    <a class='page-link' href='#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                        <span class='sr-only'>Previous</span>
                    </a>
                </li>
                ${html}
                <li class='page-item'>
                    <a class='page-link' href='#' aria-label='Next'>
                        <span aria-hidden='true'>&raquo;</span>
                        <span class='sr-only'>Next</span>
                    </a>
                </li>
            </ul>`;
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