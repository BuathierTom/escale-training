import axios from 'axios';

const WINE_API_BASE_URL = "http://localhost:5000/";

const ApiService = axios.create({
    baseURL: WINE_API_BASE_URL,

    headers: {
        "Content-type": "application/json"
    }
});


export default ApiService;


