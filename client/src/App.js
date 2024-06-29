import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Movies from './components/Movies/Movies.js';
import Auth from './components/Auth/Auth.js';

const App = () => (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Movies />} />
                    <Route path='/auth' exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
)

export default App;