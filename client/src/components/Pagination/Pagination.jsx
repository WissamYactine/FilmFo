import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovies } from '../../actions/movies.js';

import useStyles from './syles.js';

const Paginate = ({ page }) => {
    // Retrieving number of pages from state.
    const { numberOfPages } = useSelector((state) => state.movies);
    const classes = useStyles();
    const dispatch = useDispatch();

    // Get movies for the specific page.
    useEffect(() => {
        if(page) dispatch(getMovies(page));
    }, [page, dispatch]);

    // return Pagination.
    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color='primary'
            shape='rounded'
            showFirstButton
            showLastButton
            renderItem={(item) => (
                <PaginationItem style={{color: 'yellow'}} { ...item} component={Link} to={`/movies?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;