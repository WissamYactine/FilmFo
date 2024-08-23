import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate, setInvalidCred, setFormData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch (error) {
        setInvalidCred(true);
        setFormData({ ...formData, password: '' });
        console.log(error);
    }
};


export const signup = (formData, navigate, setInvalidCred, setFormData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        
        navigate('/');
    } catch (error) {
        setInvalidCred(true);
        setFormData({ ...formData, password: '', confirmPassword: '' });
        console.log(error);
    }
};