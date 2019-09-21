/**
 * Template to return HTML
 */
const htmlTemplate = () => {
  return `<div id='login' class='login' autocomplete='on'>
                <div class='login-wrapper'>
                    <div class='login-logo'>
                        <img src='./public/img/logo.png' alt=''>
                        <span>Beerflix</span>
                    </div>
                    <form class='login-form' method='post'>
                        <div class='alert alert-danger d-none' role='alert'>
                        </div>
                        <div class='form-group'>
                            <div class='input-group mb-3'>
                                <div class='input-group-prepend'>
                                    <span class='input-group-text'><i class='far fa-envelope'></i></span>
                                </div>
                                <input type='email' class='form-control' placeholder='email...' autoComplete='email' required>
                            </div>
                        </div>
                        <button type='submit' class='btn btn-block btn-primary login-btn--main'>Login</button>
                    </form>
                </div>
            </div>`;
};

/**
 * Method to render login component inside the parent specified as a parameter
 * @param {HTMLElement} parent Parent of the login component
 */
const render = parent => {
  parent.innerHTML += htmlTemplate();
};

export default render;
