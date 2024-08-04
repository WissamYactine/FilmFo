import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import FavoriteIcon from '@mui/icons-material/Favorite';
import TvIcon from '@mui/icons-material/Tv';
import useStyles from './styles.js';
import { getMovies } from '../../actions/movies.js';


const Navbar = ({ setUser }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');
        
        setUser(null);
    };
    
    const refreshSearch = () => {
        dispatch(getMovies());

        navigate('/');
    };

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = jwtDecode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
            
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Button style={{color: 'white'}} onClick={refreshSearch}>
                    <TvIcon sx={{ fontSize: 50}} />
                    <Typography className={classes.heading} variant="h3" align="center">Movies</Typography>
                </Button>
            </div>
            <Toolbar className={classes.toolbar}>
            {user?.result ? (
                <div className={classes.profile}>
                    <Button className={classes.userName} style={{color: 'yellow'}} size="small" component={Link} to="/myfavorites">
                        <FavoriteIcon fontSize='medium' />
                        <Typography variant="h6">My Favorites</Typography>
                        <FavoriteIcon fontSize='medium' />
                    </Button>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                </div>
            ) : (
                <div className={classes.profile}>
                    <div className={classes.userName}>
                        <FavoriteIcon fontSize='medium' />
                        <Typography style={{color: 'yellow'}} variant="h6">Sign in to see and add to favorites</Typography>
                        <FavoriteIcon fontSize='medium' />
                    </div>
                    <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
                </div>
            )}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;