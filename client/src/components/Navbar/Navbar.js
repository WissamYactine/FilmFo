import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar, Avatar, Popover } from '@material-ui/core';
import useStyles from './styles.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate, useLocation } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../actions/movies.js';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);
    
    useEffect(() => {
        // user.token is for jwtLogin || user.result is for googleLogin
        if(user?.result?.sub) {
            const tokenExp = user.result?.exp;  
            if(tokenExp * 1000 < new Date().getTime()) logout();
        } else if(user?.result?._id) {
            const decodedToken = jwtDecode(user?.token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
            
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
        dispatch(getMovies());
    }
    
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Button style={{color: 'white'}} component={Link} to="/" onClick={() => dispatch(getMovies())}>
                    <TvIcon sx={{ fontSize: 50}} />
                    <Typography className={classes.heading} variant="h3" align="center">Movies</Typography>
                </Button>
            </div>
            <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Button className={classes.userName} style={{color: 'yellow'}} size="small" component={Link} to="/myfavorites" onClick={() => {}}>
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