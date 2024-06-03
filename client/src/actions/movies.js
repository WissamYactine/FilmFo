import { FETCH_ALL, FETCH_ID } from '../constants/actionTypes';
import * as api from '../api';

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();

        return dispatch({type: FETCH_ALL, payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const getMovieById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchMovieById(id);

        return dispatch({type: FETCH_ID, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}