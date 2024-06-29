import express from 'express';
import { getMovies, createMovie, addToFavorites, createMultipleMovies, getMovieById, updateMovie, deleteMovie } from '../controllers/movies.js';

import auth from '../middleware/auth.js';
const router = express.Router();

// Get all movies.
router.get("/", getMovies);

// Get movie by ID.
router.get("/:id", getMovieById);

// IN PROGRESS
router.patch('/addFavorite', auth, addToFavorites);




// IN PROGRESS 

// Filter movie by favorites
// router.patch("/favorites", auth, addToFavorite);



// IN PROGRESS ^^^^^^












// Routes unaccesible to users.


// The following POST methods are used by admin to add movies to database.
// Users will not have the posibility to add to movie database. 

// Create one new movie to database: Only used by me not users.
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