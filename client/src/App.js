import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import Favorites from './components/Favorites/Favorites.js';

// Creating the different URLs paths for each location in the web browser.
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Navigate to="/movies" />} />
                    <Route path='/movies' exact element={<Home />} />
                    <Route path="/movies/search" exact element={<Home />} />
                    <Route path='/auth' exact element={(!user) ? <Auth /> : <Navigate to="/movies" />} />
                    <Route path='/myfavorites' exact element={<Favorites />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App; 