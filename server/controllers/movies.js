import MoviesFormat from "../models/moviesFormat.js";

// Find all movies.
export const getMovies = async (req, res) => {
    try {
        // Find all movies and send movies informations to client.
        const movies = await MoviesFormat.find();

        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });   
    }
};

// Find a movie by its ID (Not the ID set by Mongoose).
export const getMovieById = async (req, res) => {
    try {
        // Get movie ID from request parameters
        const { id } = req.params;

        // Set id from req.params in new variable for more 
        // clarity in the query in find method. 
        const paramId = id;

        // Find movie in database by ID.
        const movie = await MoviesFormat.find({id: paramId});

        // Send movie infos to client.
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Add movie to favorite
// export const addToFavorite = async (req, res) => {
//     try {
//         // Get movie ID from request parameters.
//         // Set id from req.params in new variable paramId for more clarity in the query in find method.
//         const { id: paramId } = req.params;

//         // Find movie by ID.
//         const movie = await MoviesFormat.find({id: paramId});

//         // Check if the movie exist. If not, send error.
//         if(movie.length == 0) {
//             return res.status(404).json({ message: "Movie not found!" });
//         }


        
//     } catch (error) {
        
//     }
// }










// The following methods are only accesible and used by admin.


// Create a movie.
export const createMovie = async (req, res) => {
    try {
        // Get movie info from request body and create new movie.
        const movie = req.body;
        const newMovie = new MoviesFormat(movie);

        // Add it to database.
        await newMovie.save();

        // Send newly added movie to client.
        res.status(202).json(newMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Create multiple movies at once.
export const createMultipleMovies = async (req, res) => {
    try {
        // Get the array of movies from request body.
        const movieList = req.body;

        // For each element (movie) in array, create and add new movie to database.
        movieList.forEach(element => {
            const newMovie = new MoviesFormat(element);
            newMovie.save();
        });

        // Send list of new added movies to client.
        res.status(202).json(movieList);   
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Update movie info by ID.
export const updateMovie = async (req, res) => {
    try {
        // Get movie ID from request parameters.
        // Set id from req.params in new variable paramId for more clarity in the query in find method.
        const { id: paramId } = req.params;

        // Find movie by ID.
        const movie = await MoviesFormat.find({id: paramId});

        // Check if the movie exist. If not, send error.
        if(movie.length == 0) {
            return res.status(404).json({ message: "Movie not found!" });
        }

        // Find the ID set by mongoose to be able to use findByIdAndUpdate method.
        const movieId = movie[0]._id;

        // Update the movie to update with new infos
        const movieToUpdate = await MoviesFormat.findByIdAndUpdate(movieId, req.body);

        // Find the movie with updated info and send it to client.
        const updatedMovie = await MoviesFormat.find({id: paramId});
        console.log(updatedMovie);
        res.status(200).json(updatedMovie);    

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete movie by ID (Not the ID set by Mongoose).
export const deleteMovie = async (req, res) => {
    try {
        // Get movie ID from request parameters.
        const { id } = req.params;

        // Set id from req.params in new variable for more 
        // clarity in the query in find method.
        const paramId = id;

        // Find movie by ID.
        const movie = await MoviesFormat.find({id: paramId});

         // Check if the movie exist. If not, send error.
         if(movie.length == 0) {
            return res.status(404).json({ message: "Movie not found!" });
        }

        // Find the ID set by mongoose to be able to use findByIdAndDelete method.
        const movieId = movie[0]._id;
        const movieTitle = movie[0].title
       
        // Delete the movie.
        await MoviesFormat.findByIdAndDelete(movieId);

        // Send successful message to client.
        res.status(200).json({ message: `The movie ${movieTitle} was deleted successfully!`});
    } catch (error) {
        res.status(500).json({message: error.message });
    }
}