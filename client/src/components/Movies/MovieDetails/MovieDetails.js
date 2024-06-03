import React from 'react';
import { Card, Container, CardActions, CardContent, CardMedia, Button, Typography, Grid, createSvgIcon, SvgIcon, Popover } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
                        <Typography variant='h8'>Cast: <br/> {movie.actors[0]} <br/> {movie.actors[1]} <br/> {movie.actors[2]}</Typography>
                        <Container className={classes.genre}>
                            <Typography variant='h8'>Genre:</Typography>
                            {movie.genres.map((genre) => (
                                <Box className={classes.box} sx={{ border: '2px solid grey' }}>{genre}</Box>
                            ))}
                        </Container>
                    </Container>
                </Container>
                <Button className={classes.favorite} size="small">
                    <FavoriteBorderIcon fontSize='large' />
                </Button>
            </Card>
            
        </Container>
    );
}

export default MovieDetails;