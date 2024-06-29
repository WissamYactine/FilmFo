import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    "id": String,
    "title": String,
    "year": String,
    "genres": [String],
    "ratings": [Number],
    "poster": String,
    "contentRating": String,
    "duration": String,
    "releaseDate": String,
    "averageRating": Number,
    "originalTitle": String,
    "storyLine": String,
    "actors": [String],
    "imdbRating": Number,
    "posterurl": String,
    "favorites": [String],
});

const MoviesFormat = mongoose.model("Movie", movieSchema);

export default MoviesFormat;

