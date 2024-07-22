import { FETCH_ALL, ADD_FAVORITE } from '../constants/actionTypes';
import * as api from '../api';

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();

        return dispatch({type: FETCH_ALL, payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const addFavorite = (movieId) => async (dispatch) => {
    try {
        const { data } = await api.addToFavorite(movieId);
        
        return dispatch({ type: ADD_FAVORITE, payload: data });
    } catch (error) {
        console.log(error);
    }
};