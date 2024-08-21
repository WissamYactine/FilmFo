import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import { getMoviesByFavorite } from '../../actions/movies.js';

import FavoriteIcon from '@mui/icons-material/Favorite';
import TvIcon from '@mui/icons-material/Tv';
import useStyles from './styles.js';


const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');
        
        setUser(null);
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
                <Button style={{color: 'white'}} component={Link} to='/'>
                    <TvIcon sx={{ fontSize: 50}} />
                    <Typography className={classes.heading} variant="h3" align="center">Movies</Typography>
                </Button>
            </div>
            <Toolbar className={classes.toolbar}>
            {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                </div>
            ) : (
                <div className={classes.profile}>
                    <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
                </div>
            )}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;