/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<article class='detail'>
                <div class='detail-header'>
                    <div class='detail-img'>
                        <img src='https://images.punkapi.com/v2/keg.png' alt=''>
                    </div>
                    <div class='detail-info'>
                        <h3 class='detail-subTitle'>First brewed 09/2007</h3>
                        <h2 class='detail-mainTitle'>Buzz</h2>
                        <p class='detail-price'><span class='currency'>$</span>15.00</p>
                        <p class='detail-description'>Operational change management inside of workflows to establish a framework. Taking seamless key
                            performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the
                            start-up mentality to derive convergence on cross-platform integration.
                        </p>
                        <div class='detail-order'>
                            <input class='detail-quantity' type='number' maxlength="2" value="1">
                            <button class='detail-button'>Add to cart</button>
                        </div>
                    </div>           
                </div>
                <div class='detail-footer'>
                    <div class='detail-section'>
                        <h4 class='detail-section--title'>Brewers Tip</h4>
                        <p class='detail-section--content'>
                            Operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline
                            to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive
                            convergence on cross-platform integration.
                        </p>        
                    </div>
                    <div class='detail-section'>
                        <h4 class='detail-section--title'>Ingredients</h4>
                        <div class='detail-boxes'>
                            <div class="detail-box">
                                <h6>malt</h6>
                                <ul>
                                    <li>Maris Otter Extra Pale</li>
                                    <li>Caramalt</li>
                                    <li>Munich</li>
                                </ul>
                            </div>
                            <div class="detail-box">
                                <h6>hops</h6>
                                <ul>
                                    <li>Fuggles</li>
                                    <li>First Gold</li>
                                    <li>Fuggles</li>
                                    <li>First Gold</li>
                                </ul>
                            </div>
                            <div class="detail-box">
                                <h6>hops</h6>
                                <ul>
                                    <li>Fuggles <span>[ 3.3 Kilograms ]</span></li>
                                    <li>First Gold</li>
                                    <li>Fuggles</li>
                                    <li>First Gold</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class='detail-section comments-section'>
                        <form class="createComment">
                            <label for="comment">Your Comment</label>
                            <textarea id="comment" type="text" placeholder="Comment" required=""></textarea>
                            <button type="submit">Post Comment</button>
                        </form>
                        <div class='commentBox'>
                            <div class="comment">
                                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png" class="commentPic" alt="user Pic">
                                <div class="commentBody">
                                    <div class="commentHeader">
                                        <h3 class="commentAuthor">Bonorum Malorum</h3><span class="publishDate">2 days ago</span>
                                    </div>
                                    <span class="commentContent">Many desktop publishing packages and web page editors now use</span>
                                </div>
                            </div>
                            <div class="comment">
                                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png" class="commentPic" alt="user Pic">
                                <div class="commentBody">
                                    <div class="commentHeader">
                                        <h3 class="commentAuthor">Bonorum Malorum</h3><span class="publishDate">2 days ago</span>
                                    </div>
                                    <span class="commentContent">Many desktop publishing packages and web page editors now use</span>
                                </div>
                            </div>
                            <div class="comment">
                                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png" class="commentPic" alt="user Pic">
                                <div class="commentBody">
                                    <div class="commentHeader">
                                        <h3 class="commentAuthor">Bonorum Malorum</h3><span class="publishDate">2 days ago</span>
                                    </div>
                                    <span class="commentContent">Many desktop publishing packages and web page editors now use</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent, object) => {
    // Añado el componente
    parent.innerHTML += htmlTemplate({...object});
}

export default render;