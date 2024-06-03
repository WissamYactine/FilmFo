import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie.js';
import MovieDetails from './MovieDetails/MovieDetails.js'
import useStyles from './styles.js'

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log(movies);
    return (
        !movies.length ? <CircularProgress /> : /*( movies.length === 1 ? <MovieDetails movie={movies[0]}/> :*/ (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={4}>
                        <Movie movie={movie} />
                    </Grid>
                ))}
            </Grid>
        ))
    // )
    ;
}

export default Movies;