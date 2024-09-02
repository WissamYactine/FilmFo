import express from 'express';

import { getMovies, getMoviesBySearch, getMoviesByFavorite, createMovie, addToFavorites, createMultipleMovies, updateMovie, deleteMovie } from '../controllers/movies.js';

import auth from '../middleware/auth.js';
const router = express.Router();

// Get all movies.
router.get("/", getMovies);

// Fetch movies by search.
router.get("/search", getMoviesBySearch);

// Fetch movies by favorite.
router.get("/myFavorite", auth, getMoviesByFavorite);

// Add movie to favorite.
router.patch("/addFavorite", auth, addToFavorites);




// Routes bellow were used during development and are not accesible to users.


// The following POST methods are used by me to add movies to database.
// Users will not have the posibility to add to movie database. 

// Create one new movie to database: Only used by admin not users.
router.post("/", createMovie);

// Create multiple new movies to database.
// Commented because only one POST method is allowed at once
// under the same ressource. Only used by me not users.
// 
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// router.post("/", createMultipleMovies);

// Update specific movie informations using movie ID: Only used by me not users.
router.put("/:id", updateMovie);

// Delete a movie from database using movie ID: Only used by me not users.
router.delete("/:id", deleteMovie);

export default router;