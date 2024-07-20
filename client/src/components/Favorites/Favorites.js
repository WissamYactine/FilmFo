import React from 'react';
import { Grid, CircularProgress, Typography, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from '../Movies/Movie/Movie.js';
import useStyles from './styles.js'

const Favorite = () => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        !movies.length ? <CircularProgress /> : (
            <Container>
            <Typography className={classes.heading} variant="h3" align="center">My Favorite List</Typography>
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                    {movies.map((movie) => {
                        return movie.favorites.find((like) => like === (user?.result?.sub || user?.result?._id))
                        ? (
                            <Grid key={movie._id} item xs={12} sm={4}>
                                <Movie movie={movie} />
                            </Grid>
                        ) : (
                            null
                        );
                    })}
            </Grid>
            </Container>
        ))
    ;
}

export default Favorite;