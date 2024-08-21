import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_FAVORITE, ADD_FAVORITE, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api';

export const getMovies = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchMovies(page);
        
        dispatch({ type: FETCH_ALL, payload: data });

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}

export const getMoviesBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data: { data } } = await api.fetchMoviesBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: { data }});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesByFavorite = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchFavoriteMovies();

        dispatch({ type: FETCH_BY_FAVORITE, payload: data });

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const addFavorite = (movieId) => async (dispatch) => {
    try {
        const { data } = await api.addToFavorite(movieId);
        
        dispatch({ type: ADD_FAVORITE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
