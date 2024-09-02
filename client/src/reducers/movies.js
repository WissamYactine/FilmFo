import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_FAVORITE, ADD_FAVORITE, START_LOADING, END_LOADING } from "../constants/actionTypes";


const reducer = (state = { isLoding: true, movies: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                movies: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        
        case FETCH_BY_SEARCH:
            return { ...state, movies: action.payload.data };
        
        case FETCH_BY_FAVORITE:
            return { ...state, movies: action.payload.data };

        case ADD_FAVORITE:
            return {
                ...state, 
                movies : state.movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie)),
            }

        case START_LOADING:
            return { ...state, isLoding: true }

        case END_LOADING:
            return { ...state, isLoding: false }

        default:
            return state;
    }
}

export default reducer;