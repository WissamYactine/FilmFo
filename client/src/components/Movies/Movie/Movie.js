// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Container, Card, /*CardActions, CardContent,*/ CardMedia, Button, IconButton, Typography, /*Grid, createSvgIcon, SvgIcon,*/ Popover } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './styles';
// import useEffect from 'react';

import { useDispatch } from 'react-redux';

import MovieDetails from '../MovieDetails/MovieDetails';


import { addFavorite } from '../../../actions/movies';
import { getMovies } from '../../../actions/movies.js';

const Movie = ({ movie }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setPopOpen] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    // const [favorite, setFavorite] = React.useState(false);


    const handleClick = (e) => {
        if(open) {
            const popoverElement = document.querySelector(".popoverCard");
            if(!popoverElement.contains(e.target)) {
                setPopOpen(false);
            }
        }
    }

    const handleKeyDown = (e) => {
        if(open) {
            if(e.key === 'Escape') {
                setPopOpen(false);
            }
        }
    }

    const id = open ? 'simple-popover' : undefined;

    const handleChildElementClick = (e) => {
        e.stopPropagation();
        dispatch(addFavorite({ movieId: movie._id }));
    }

    const Favorite = () => {
        if(movie.favorites.length > 0) {
            return movie.favorites.find((like) => like === (user?.result?.jti || user?.result?._id))
            ? (
                <><FavoriteIcon fontSize='large' /></>
            ) : (
                <><FavoriteBorderIcon fontSize='large' /></>
            );
        }

        return <><FavoriteBorderIcon fontSize='large' /></>
    }

    return (
        <Container onClick={handleClick} onKeyUp={handleKeyDown}>
            <Card className={classes.card} onClick={() => setPopOpen(true)}>
                <CardMedia className={classes.media} image={movie.posterurl} title={movie.title}/>
                <div className={classes.overlay}>
                    <Typography variant="h4">{movie.title}</Typography>
                    <Typography variant="h6">{movie.year}</Typography> 
                    <div className={classes.details}>
                        <StarsIcon sx={{ fontSize: 30 }}></StarsIcon>
                        <Typography variant="h6">&nbsp; {movie.imdbRating}/10</Typography>
                    </div>         
                </div>
                <div className={classes.overlay2}>
                    <Button  style={{ color: 'yellow' }} size="small" onClick={(e) => handleChildElementClick(e)}>
                        <Favorite />
                    </Button>
                </div>
            </Card>
            <Popover
                id={id}
                open={open}
                anchorReference={'none'}
                classes={{
                    root: classes.popoverRoot,
                    }}
            >
                <Container className='popoverCard' style={{ backgroundColor: '#000050' }}>
                    <Container className={classes.closePop}>
                        <IconButton style={{ color: 'white', size: 'medium'}} onClick={() => setPopOpen(false)}>
                            <CloseIcon fontSize='large' ></CloseIcon>
                        </IconButton>
                    </Container>
                    <MovieDetails movie={movie} />
                </Container>
            </Popover>
        </Container>
    );
}

export default Movie;