import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TvIcon from '@mui/icons-material/Tv';

import { useDispatch } from 'react-redux';

import { getMovies } from './actions/movies.js';
import Movies from './components/Movies/Movies.js';
import useStyles from './styles.js';



const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Button style={{color: 'white'}} onClick={() => dispatch(getMovies())}>
                    <TvIcon sx={{ fontSize: 50}} />
                    <Typography className={classes.heading} variant="h3" align="center">Movies</Typography>
                </Button>
                <Button style={{color: 'yellow'}} size="small" onClick={() => {}}>
                    <FavoriteBorderIcon fontSize='large' />
                </Button>
            </AppBar>
            {/* <Grow in > */}
            {/* <Container> */}
                <Movies />
            {/* </Container> */}
            {/* </Grow> */}
        </Container>
    )
}

export default App;