// Imports
import { toggleLoader } from './ui/ui.js';
import state from './state/index.js';

// Intento login via local storage
login();
async function login() {
  try {
    // Muestro el panel de carga de la autenticación
    toggleLoader('d-none');
    // Obtengo el string del local storage
    const lsString = localStorage.getItem('BeerflixIBA');
    if (lsString) {
      // Si existe lo convierto a JSON
      const lsJSON = JSON.parse(lsString);
      if (lsJSON) {
        // Intento autenticar con el email del local storage
        const auth = await state.login(lsJSON.user.email);
        if (auth) {
          // Si es corecto navego al index
          // eslint-disable-next-line no-undef
          page.redirect('/');
        } else {
          // Si no es correcto, borro el local storage y me mantengo en el login
          localStorage.clear();
        }
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Quito el panel de carga de la autenticación
    toggleLoader('d-none');
  }
}
