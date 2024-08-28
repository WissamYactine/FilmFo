import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { Typography }  from '@material-ui/core';

import Movie from './Movie/Movie.js';
import useStyles from './styles.js';

const Movies = () => {
    const classes = useStyles();
    const { movies, isLoading } = useSelector((state) => state.movies);

    if(!movies.length && !isLoading) return <Typography variant='h6' style={{ color: 'white' }}>No movies found!</Typography>;

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={6} md={6} lg={4}>
                        <Movie movie={movie} />
                    </Grid>
                ))}
            </Grid>
        ))
         ;
}

export default Movies;