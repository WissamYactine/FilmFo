import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie.js';
import useStyles from './styles.js';

const Movies = () => {
    const classes = useStyles();
    const movies = useSelector((state) => state.movies);

    return (
        !movies.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={4}>
                        <Movie movie={movie} />
                    </Grid>
                ))}
            </Grid>
        ))
         ;
}

export default Movies;