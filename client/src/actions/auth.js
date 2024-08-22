import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate, setInvalidCred) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch (error) {
        setInvalidCred(true);
        // console.log(error);
    }
};


export const signup = (formData, navigate, setInvalidCred) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};