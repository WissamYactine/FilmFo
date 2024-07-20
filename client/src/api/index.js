import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

// TRY TO EDIT INTERCEPTOR TO SEND TOKEN AND NOT JTI FOR GOOGLE LOGIN => IF JWT.DECODE WORKS ON MIDDLEWARE

API.interceptors.request.use((req) => {
    if(JSON.parse(localStorage.getItem('profile'))?.token) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } 
    // else if(JSON.parse(localStorage.getItem('profile'))?.result){
    //     req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result.sub}`;
    // }

    return req;
});

export const fetchMovies = () => API.get('/movies');
export const fetchMovieById = (id) => API.get(`/movies/${id}`);
export const addToFavorite = (movieId) => API.patch('/movies/addFavorite', movieId);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);



// IN PROGRESS
// export const fetchFavorites = () => API.get('/movies/favorites');