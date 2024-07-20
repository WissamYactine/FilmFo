import React from 'react';
import { Container, Card, CardMedia, Button, IconButton, Typography, /*Grid, createSvgIcon, SvgIcon,*/ Popover } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './styles';


import { useDispatch } from 'react-redux';

import MovieDetails from '../MovieDetails/MovieDetails';


import { addFavorite } from '../../../actions/movies';

const Movie = ({ movie }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setPopOpen] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));


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
        if(user) {
            return movie.favorites.find((like) => like === (user?.result?.sub || user?.result?._id))
            ? (
                <Button className={classes.overlay2} style={{ color: 'yellow' }} size="small" onClick={(e) => handleChildElementClick(e)}>
                    <FavoriteIcon fontSize='large' />
                </Button>
            ) : (
                <Button className={classes.overlay2} style={{ color: 'yellow' }} size="small" onClick={(e) => handleChildElementClick(e)}>
                    <FavoriteBorderIcon fontSize='large' />
                </Button>
            );
        }
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
                <Favorite />
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
                    <Favorite />
                </Container>
            </Popover>
        </Container>
    );
}

export default Movie;
