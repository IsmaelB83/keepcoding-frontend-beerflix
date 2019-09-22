/**
 * Imports
 */
import Api from '../api/index.js';

/**
 * Definitions
 */
const { login, getBeers, getBeer, postComment, postLike } = Api();

/**
 * Class to handle the global state of the SPA (trying to get similar functionality than redux).
 * It also centralizes the access to the API
 */
class State {
  /**
   * Constructor
   */
  constructor() {
    this.email = null;
    this.apiKey = null;
    this.cart = null;
    this.beers = null;
    this.currentBeer = null;
    this.currentPage = 0;
    this.beersPerPage = 10;
  }

  /**
   * Login user into the state
   */
  login = async email => {
    try {
      // API Login
      const result = await login(email);
      if (result) {
        // User logged in
        (this.email = result.user.email), (this.apiKey = result.user.apiKey);
        this.cart = [];
        localStorage.setItem('BeerflixIBA', JSON.stringify(result.user));
        return true;
      }
      // Not authorized
      throw 'Not authenticated';
    } catch (error) {
      return false;
    }
  };

  /**
   * Logout user from state
   */
  logout = () => {
    // User not logged in
    (this.email = null), (this.apiKey = null);
    this.cart = null;
    localStorage.clear();
  };

  /**
   * Get info from the current logged in user
   */
  isAuthenticated = () => {
    if (this.email && this.apiKey) {
      return true;
    }
    return false;
  };

  /**
   * Add beer to the shopping cart
   * @param {String} id Beer identification
   * @param {String} name Beer name
   * @param {Number} quantity Beer quantity
   * @param {Number} price Beer price
   */
  addBeerToCart = (id, name, quantity, price) => {
    const element = this.cart.find(e => (e.id = id));
    if (element) {
      element.quantity += quantity;
    } else {
      this.cart.push({ id, name, quantity, price });
    }
  };

  /**
   * Deletes the specified id beer from the shopping cart
   * @param {String} id Beer identification
   */
  removeBeerFromCart = id => {
    const index = this.cart.findIndex(e => (e.id = id));
    if (index >= 0) {
      this.cart.splice(index, 1);
    }
  };

  /**
   * Load beers from backend
   */
  loadBeers = async (filter, from, to) => {
    // Fetch data filtering by name
    const results = await getBeers(filter);
    // Filter by date if available
    const fromDate = new Date(from);
    const toDate = new Date(to);
    if (fromDate instanceof Date && !isNaN(fromDate) && toDate instanceof Date && !isNaN(toDate)) {
      this.beers = results.beers.filter(beer => {
        const aux = beer.firstBrewed.split('/');
        const brewedDate = new Date(aux[1], '01', aux[0]);
        if (fromDate <= brewedDate && brewedDate <= toDate) {
          return true;
        }
        return false;
      });
    } else {
      this.beers = results.beers;
    }
    this.currentPage = 0;
    // Return beers
    return this.beers;
  };

  /**
   * Load beer detail
   */
  loadBeer = async id => {
    // Fetch data filtering by name
    const results = await getBeer(id);
    if (results.success) {
      this.currentBeer = results.beer;
    }
    return this.currentBeer;
  };

  /**
   * Post Like to beer
   */
  postLike = async id => {
    // Fetch data filtering by name
    const results = await postLike(id);
    return results;
  };

  /**
   * Post comment to beer
   */
  postComment = async (id, comment) => {
    // Fetch data filtering by name
    const results = await postComment(id, comment);
    return results;
  };
}

// Instancio la clase state y la retorno
const stateApp = new State();
// Debug
window.state = stateApp;

// Exports
export default stateApp;
