import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Movies from './components/Movies/Movies.js';
import Auth from './components/Auth/Auth.js';
import Favorites from './components/Favorites/Favorites.js';

import { useDispatch } from 'react-redux';
import { getMovies } from './actions/movies.js';

const App = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch, user]);
    
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar setUser={setUser}/>
                <Routes>
                    <Route path='/' exact element={<Movies />} />
                    <Route path='/auth' exact element={<Auth />} />
                    <Route path='/myfavorites' exact element={<Favorites />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;