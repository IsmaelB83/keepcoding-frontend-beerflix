// Imports
import { removeClass, addClass } from '../ui.js';
import renderLogin from '../components/login.js';
import state from '../state/index.js';


/**
 * Prepare page to render login
 */
const render = () => {
    // Fetch DOM elements
    const app = document.querySelector('#app');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Change UI
    app.innerHTML = '';
    header.innerHTML = '';
    footer.style.display = "none";
    // Render login
    renderLogin(app);
    // Once renedered, the component is initialized
    componentMounted();
}

/**
 * Once rendered, this function adds the logic to the new component
 */
const componentMounted = () => {
    // Fetch DOM elements
    const form = document.querySelector('.login-form');
    const email = document.querySelector("input[type='email']");
    const alert = document.querySelector('.alert');
    // Functions to change UI
    const showAlert = removeClass(alert);
    const hideAlert = addClass(alert);
    // When user writes in email field, and the input is valid, preivous alerts are hidden to increase UX
    email.addEventListener('keydown', () => {
        if(email.validity.valid || email.value === '') {
            hideAlert('d-none');
        }
    });
    // Listener to capture submit event
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
    });
}

export default render;