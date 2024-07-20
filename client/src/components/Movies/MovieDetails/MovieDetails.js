import React from 'react';
import { Card, Container, CardContent, Typography } from '@material-ui/core';
import StarsIcon from '@mui/icons-material/Stars';
import Box from '@mui/material/Box';

import useStyles from './styles';


const MovieDetails = ({ movie }) => {
    const classes = useStyles();

    return (
        <Container className={classes.div}>
            <Container className={classes.container}>
                <img className={classes.media} alt='MoviePoster' src={movie.posterurl}></img>
            </Container>
            <Card className={classes.card} >
                <Typography className={classes.title} variant='h2'  >{movie.title}</Typography>
                <Typography className={classes.year} variant='h5'>{movie.year}</Typography>
                <CardContent className={classes.summary} >{movie.storyLine}</CardContent>
                <Container className={classes.details}>
                    <Container style={{ display: 'flex', flexDirection: 'column' }} >
                        <div className={classes.rating}>
                            <StarsIcon sx={{ fontSize: 30 }}></StarsIcon>
                            <Typography variant="h6">&nbsp; {movie.imdbRating}/10</Typography>
                        </div>
                        <Typography variant='body1'>Cast: <br/> {movie.actors[0]} <br/> {movie.actors[1]} <br/> {movie.actors[2]}</Typography>
                        <Container className={classes.genre}>
                            <Typography variant='body1'>Genre:</Typography>
                            {movie.genres.map((genre) => (
                                <Box className={classes.box} sx={{ border: '2px solid grey' }} key={genre} >{genre}</Box>
                            ))}
                        </Container>
                    </Container>
                </Container>
            </Card>
            
        </Container>
    );
}

export default MovieDetails;