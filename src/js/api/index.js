/**
 * Default API URL
 */
const API_URL = "https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/";

/**
 * Executes a fetch with api key header
 * @param {String} url API url to fetch from
 * @param {String} method Either GET or POST
 * @param {Object} body Objet to include in the body headers (if any)
 * @param {apiKey} apiKey JSON web token to authenticate for backend authencation
 */
const secureFetch = async(url, method, body, apiKey) => {
    // Fetch options
    const options = {}
    options.method = method;
    options.body = JSON.stringify(body);
    options.headers = { "Content-type": "application/json" };
    // API Key when necessary
    if (apiKey) {
        options.headers["X-API-KEY"] = apiKey;
    }
    // Execute fetch
    return await fetch(url, options);
}

/**
 * API Object to consume resources in the backend
 * @param {URL} url Backend API url
 */
const api = (url = API_URL) => {

    /**
     * JSON web tokent to authenticate in the backend
     */
    let API_KEY = '';
    /**
     * Rutas básicas del API
     */
    const LOGIN_URL = `${url}user/login`;
    const BEERS_URL = `${url}beers`;

    /**
     * Objeto con los metodos para utilización de la API
     */
    return {
        /**
         * Comprueba que tenemos las credenciales correctas (email y API key)
         * @param {String} email Email registrado en el backend
         */
        login: async (email) => {
            try {
                // Login
                const response = await secureFetch(LOGIN_URL, 'POST', {email});
                // If not ok exception
                if (!response.ok) {
                    return false;
                }
                // If ok
                const result = await response.json();
                API_KEY = result.user.apiKey;
                return result;
            } catch (error) {
                console.error(error.message);
                return null;
            }
        },
        /**
         * Get Beers list
         * @param {String} filter Filtro a aplicar a la busquedad de beers
         */
        getBeers: async (filter) => {
            try {
                // Url a la que llamar 
                const requestUrl = filter ? `${BEERS_URL}/search=${filter}` : BEERS_URL;
                const response = await fetch(requestUrl, {
                    headers: {
                        "Content-type": "application/json",
                        "X-API-KEY": API_KEY,
                    },
                });
                // Exceptiopn
                if (!response.ok) {
                    throw new Error("Error fetching shows");
                }
                // Ok
                return await response.json();
            } catch (error) {
                console.error(error.message);
                throw error;
            }
        },
        /**
         * GET beer detail identified by specified ID
         * @param {String} id Beer identification number
         */
        getBeer: async (id) => {
            try {
                // Url a la que llamar
                const response = await fetch(`${BEERS_URL}/${id}`,{
                    headers: {
                        "Content-type": "application/json",
                        "X-API-KEY": API_KEY,
                    },
                });
                // Exception
                if (!response.ok) {
                    throw new Error("Error getting a show");
                }
                // Ok
                return await response.json();
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        /**
         * POST a like to the id beer
         * @param {String} id Beer identification number
         */
        postLike: async (id) => {
            try {
                // Fetch
                const response = await fetch(`${BEERS_URL}/${id}/like`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "X-API-KEY": API_KEY,
                    },
                });
                // Exception
                if (!response.ok) {
                    throw new Error("Error when posting a comment");
                }
                // Ok
                return await response.json();
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        /**
         * POST a comment to the id beer
         * @param {String} id Beer identification number
         * @param {String} comment Commento to post
         */
        postComment: async (id, comment) => {
            try {
                // Fetch
                const response = await fetch(`${BEERS_URL}/${id}/comment`, {
                    method: "POST",
                    body: JSON.stringify({
                        comment: comment,
                    }),
                    headers: {
                        "Content-type": "application/json",
                        "X-API-KEY": API_KEY,
                    },
                });
                // Exception
                if (!response.ok) {
                    throw new Error("Error giving a like");
                }
                // Ok
                return await response.json();
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
    };
};

export default api;
