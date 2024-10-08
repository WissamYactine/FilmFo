import React from 'react';
import { Grid, CircularProgress, Typography, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from '../Movies/Movie/Movie.js';
import useStyles from './styles.js'

const Favorite = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const { movies, isLoading } = useSelector((state) => state.movies);

    if(!movies.length && !isLoading) return <Typography variant='h6' style={{ color: 'white' }}>No movies added to favorties</Typography>;

    return (
        isLoading ? <CircularProgress /> : (
            <Container>
            <Typography className={classes.heading} variant="h3" align="center">My Favorite List</Typography>
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                    {movies.map((movie) => (
                        movie.favorites.find((like) => like === (user?.result?.sub || user?.result?._id))
                        ? (
                            <Grid key={movie._id} item xs={12} sm={3}>
                                <Movie movie={movie} />
                            </Grid>
                        ) : (
                            null
                        )
                    ))}
            </Grid>
            </Container>
        ))
    ;
}

export default Favorite;