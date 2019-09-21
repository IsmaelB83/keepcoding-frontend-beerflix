/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = comments => {
  return `<h4 class='detail-section--title'>Comments</h4>
            <form class="form-comment" method="POST">
                <textarea id="comment" type="text" placeholder="Comment" required></textarea>
                <button type="submit">Post Comment</button>
            </form>
            <div class='comment-box'>
                ${comments
                  .map(comment => {
                    return `<div class="comment">
                            <img src="/public/img/avatar.png" class="img-fluid rounded-circle comment-avatar" alt="user Pic">
                            <div class="comment-body">
                                <p class='comment-author'>${comment.author}<span>${comment.date}</span></p>
                                <p class='comment-text'>${comment.text}</p>
                            </div>
                        </div>`;
                  })
                  .join('')}
            </div>`;
};

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent, comments) => {
  // Añado el componente
  console.log(comments);
  const aux = [
    { author: 'Tamara Mazuela', date: '1 day ago', text: 'blablablabalablalbablabablabalbaalala' },
    { author: 'Olivia Bernal', date: '2 hours ago', text: 'blablablabalablalbablabablabalbaalala' },
    { author: 'Ismael Bernal', date: '8 minutes ago', text: 'blablablabalablalbablabablabalbaalala' }
  ];
  parent.innerHTML += htmlTemplate(aux);
};

export default render;
