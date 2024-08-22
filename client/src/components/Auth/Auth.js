import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { signin, signup } from '../../actions/auth';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignUp] = useState(false);
    const [invalidCred, setInvalidCred] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setFormData(initialState);
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate, setInvalidCred));
            setFormData({ ...formData, password: '' });
        }
    };
    
    const googleSuccess = async (res) => {
        const result = jwtDecode(res?.credential);
        
        try {
            dispatch({type: 'AUTH', data: { result, token: res.credential }});
            
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };
    
    const googleFailure = () => alert("Google Sign In was unsuccessful. Try Again Later");
    
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} value={formData.password} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} error={invalidCred} helperText={invalidCred ? 'Email or Password are incorrect!' : ''}/>
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                </Grid>
                <Grid container className={classes.loginButton}>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                    />
                    <Button type='submit' variant='contained' color='primary' >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                </Grid>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  );
}

export default Auth;