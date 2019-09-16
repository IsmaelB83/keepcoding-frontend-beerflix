/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<section id='products' class='container'>
                <div class='row'>
                    <div class='col-12>
                        <div id='products' class='products'>
                            <h2 class='products-title'>Enjoy your beer</h2>
                            <h3 class='products-subtitle'>Home delivery</h3>
                            <div class="products-search">
                                <form id="searchForm" method="post">
                                    <div class="searchCriteria">
                                        <div class="form-group mr-1 mb-2">
                                            <input type="text" id="inputSearch" class="form-control form-control-sm" placeholder="name">
                                        </div>
                                        <div class="form-group mr-1 mb-2">
                                            <input type="date" id="inputDate" class="form-control form-control-sm" placeholder="brew date">
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-sm btn-primary mb-2 test"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                            
                            <div class='products-content'>                   
                            </div>

                            <div class='paginator'>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

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