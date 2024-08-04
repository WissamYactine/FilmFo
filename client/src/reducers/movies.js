import { FETCH_ALL, FETCH_BY_SEARCH, ADD_FAVORITE } from "../constants/actionTypes";

// movies is the state.
const reducer = (movies = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        
        case FETCH_BY_SEARCH:
            return action.payload;

        case ADD_FAVORITE:
            return movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie));

        default:
            return movies;
    }
}

export default reducer;