import axios from 'axios';

// Creating base URL for all api calls.
const API = axios.create({ baseURL: "http://localhost:5000" });

// Intercept every request and add user token in the request's header authorization before returning it.
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } 

    return req;
});

export const fetchMovies = (page) => API.get(`/movies?page=${page}`);
export const fetchMoviesBySearch = (searchQuery) => API.get(`/movies/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchFavoriteMovies = () => API.get('/movies/myFavorite');
export const addToFavorite = (movieId) => API.patch('/movies/addFavorite', movieId);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);