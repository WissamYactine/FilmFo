import { FETCH_ALL, FETCH_ID } from "../constants/actionTypes";

// movies is the state.
const reducer = (movies = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            
        case FETCH_ID:
            return action.payload;

        default:
            return movies;
    }
}

export default reducer;