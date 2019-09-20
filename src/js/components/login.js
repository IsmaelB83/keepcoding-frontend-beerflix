/**
 * Imports
 */
import state from '../state.js';
import { toggleLoader, removeClass, addClass } from '../ui.js'

/**
 * Template que genera el contenido del componente
 */
const htmlTemplate = () => {
    return `<div id='login' class='login' autocomplete='on'>
                <div class='login-wrapper'>
                    <div class='login-logo'>
                        <img src='./public/logo.png' alt=''>
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
                        <!--
                        <div class='form-group'>
                            <div class='input-group mb-3'>
                                <div class='input-group-prepend'>
                                    <span class='input-group-text'><i class='fas fa-key'></i></span>
                                </div>
                                <input type='password' class='form-control' placeholder='api key' autoComplete='password' required>
                            </div>
                        </div>
                        -->
                        <button type='submit' class='btn btn-block btn-primary login-btn--main'>Login</button>
                    </form>
                </div>
            </div>`;
}

/**
 * Metodo que renderiza el componente en el parent indicado
 * @param {HTMLElement} parent Parent sobre el que añadir el componente
 */
const render = (parent) => {
    // Add component to the specified parent
    parent.innerHTML += htmlTemplate();
    // Select some DOM elements needed below
    const form = document.querySelector('.login-form');
    const email = document.querySelector("input[type='email']");
    const alert = document.querySelector('.alert');
    const showAlert = removeClass(alert);
    const hideAlert = addClass(alert);
    /**
     * When user writes in email field, and the input is valid, preivous alerts are hidden to increase UX
     */
    email.addEventListener('keydown', () => {
        if(email.validity.valid || email.value === '') {
            hideAlert('d-none');
        }
    });
    /**
     * Listener to capture submit event
     */
    form.addEventListener('submit', async (ev) => {
        try {
            toggleLoader('d-none');
            ev.preventDefault();
            // Login to API 
            if (await state.login(email.value)) {
                page('/');
            } else {
                // Error display alert
                alert.innerHTML = 'e-mail address not authorized'
                showAlert('d-none');
            }    
        } catch (error) {
            alert.innerHTML = error.message;
            showAlert('d-none');
        } finally {
            toggleLoader('d-none');
        }
    })
}

export default render;

