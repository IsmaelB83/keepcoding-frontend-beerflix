/**
 * Imports
 */
import Api from './api.js';

/**
 * Definitions
 */
const { login } = Api();

/**
 * Class to handle the global state of the SPA (trying to get similar functionality than redux)
 */
class State {

    /**
     * Constructor
     */
    constructor() {
        // User not logged in
        this.email = null;
        this.apiKey = null;
        this.cart = null;
    }

    /**
     * Login user into the state
     */
    login = async (email) => {
        try {
            // API Login
            const result = await login(email);
            if (result) {
                // User logged in
                this.email = result.user.email,
                this.apiKey = result.user.apiKey;
                this.cart = [];
                localStorage.setItem('BeerflixIBA', JSON.stringify(result.user));
                return true;
            }
            // Not authorized
            throw 'Not authenticated';
        } catch (error) {
            return false;
        }
    }

    /**
     * Logout user from state
     */
    logout = () => {
        // User not logged in
        this.email = null,
        this.apiKey = null;
        this.cart = null;
        localStorage.clear();
    }

    /**
     * Get info from the current logged in user
     */
    isAuthenticated = () => {
        if (this.email && this.apiKey) {
            return true;
        }
        return false;
    }

    /**
     * Add beer to the shopping cart
     * @param {String} id Beer identification
     * @param {String} name Beer name
     * @param {Number} quantity Beer quantity
     * @param {Number} price Beer price
     */
    addBeerToCart = (id, name, quantity, price) => {
        const element = this.cart.find(e=>e.id = id);
        if (element) {
            element.quantity += quantity;
        } else {
            this.cart.push({id, name, quantity, price});
        }
    }

    /**
     * Deletes the specified id beer from the shopping cart
     * @param {String} id Beer identification
     */
    removeBeerFromCart = (id) => {
        const index = this.cart.findIndex(e=>e.id = id);
        if (index >= 0) {
            this.cart.splice(findIndex,1);
        }
    }
}

// Instancio la clase state y la retorno
const stateApp = new State();
// Debug
window.state = stateApp;

// Exports
export default stateApp;


