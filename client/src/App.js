import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Movies from './components/Movies/Movies.js';
import Auth from './components/Auth/Auth.js';
import Favorites from './components/Favorites/Favorites.js';

const App = () => (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Movies />} />
                    <Route path='/auth' exact element={<Auth />} />
                    <Route path='/myfavorites' exact element={<Favorites />} />
                </Routes>
            </Container>
        </BrowserRouter>
)

export default App;