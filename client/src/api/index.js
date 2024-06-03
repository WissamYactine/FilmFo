import axios from 'axios';

const url = "http://localhost:5000/movies";

export const fetchMovies = () => axios.get(url);
export const fetchMovieById = (id) => axios.get(`${url}/${id}`);