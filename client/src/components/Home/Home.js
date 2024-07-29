import React from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Movies from '../Movies/Movies.js';
import Pagination from '../Pagination/Pagination.jsx';
import useStyles from './styles.js';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');


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
                                fullWidth
                                value=""
                                onChange={() => {}}   
                                />
                            </AppBar>
                        </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;