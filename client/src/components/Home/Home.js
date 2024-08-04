import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getMoviesBySearch } from '../../actions/movies.js';

import Movies from '../Movies/Movies.js';
import Pagination from '../Pagination/Pagination.jsx';
import useStyles from './styles.js';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const searchMovie = () => {
        if(search.trim() || tags) {
            dispatch(getMoviesBySearch({ search, tags: tags.join(',') }))
            navigate(`/movies/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            searchMovie();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth='xl'>
                <Grid container justify-content="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Movies />
                            <Paper elevation={6} style={{width: '30%', flex: 'row', justifyContent: 'end'}}>
                                <Pagination />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                <TextField 
                                name="search" 
                                variant="outlined" 
                                label="Search Movies"
                                onKeyDown={handleKeyDown}
                                fullWidth
                                value={search}
                                onChange={(e) => {setSearch(e.target.value)}}   
                                />
                            </AppBar>
                            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                <ChipInput 
                                    style={{ margin: '10px 0' }}
                                    value={tags}
                                    onAdd={handleAdd}
                                    onDelete={handleDelete}
                                    label='Categories'
                                    variant='outlined'
                                />
                                <Button onClick={searchMovie} className={classes.searchButton} color='primary' variant='contained'>Search</Button>
                            </AppBar>
                        </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;