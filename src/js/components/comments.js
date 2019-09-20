/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return  `<div class='detail-section mt-4'>
                <h4 class='detail-section--title'>Comments</h4>
                <form class="form-comment" method="POST">
                    <textarea id="comment" type="text" placeholder="Comment" required></textarea>
                    <button type="submit">Post Comment</button>
                </form>
                <div class='comment-box'>
                    <div class="comment">
                        <img src="/public/avatar.png" class="img-fluid rounded-circle comment-avatar" alt="user Pic">
                        <div class="comment-body">
                            <p class='comment-author'>Bonorum Malorum<span>2 days ago</span></p>
                            <p class='comment-text'>"Many desktop publishing packages and web page editors now use"</p>
                        </div>
                    </div>
                    <div class="comment">
                        <img src="/public/avatar.png" class="img-fluid rounded-circle comment-avatar" alt="user Pic">
                        <div class="comment-body">
                            <p class='comment-author'>Bonorum Malorum<span>2 days ago</span></p>
                            <p class='comment-text'>"Many desktop publishing packages and web page editors now use"</p>
                        </div>
                    </div>
                    <div class="comment">
                        <img src="/public/avatar.png" class="img-fluid rounded-circle comment-avatar" alt="user Pic">
                        <div class="comment-body">
                            <p class='comment-author'>Bonorum Malorum<span>2 days ago</span></p>
                            <p class='comment-text'>"Many desktop publishing packages and web page editors now use"</p>
                        </div>
                    </div>
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



