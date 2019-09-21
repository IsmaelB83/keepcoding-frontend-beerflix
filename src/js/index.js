// Imports
import { toggleLoader } from './ui.js';
import state from './state/index.js';

// Intento login via local storage
login();
async function login () {
    try {
        toggleLoader('d-none');
        const auxLS = localStorage.getItem('BeerflixIBA');
        const user = JSON.parse(auxLS);
        if (user) {
            const auth = await state.login(user.email)           
            if (auth) {
                page('/');
            } else {
                localStorage.clear();
            }
        }         
    } catch (error) {   
        console.log(error);
    } finally {
        toggleLoader('d-none');
    }    
}