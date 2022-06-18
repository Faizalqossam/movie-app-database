//import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/**
 * Buat slice: untuk generate action dan reducer.
 * menerima parameter object: name, initialState, reducers.
 */
const moviesSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload);
        },
        updateMovies(state,action) {
            state.movies = action.payload;
        },
    },
})

// generate action dan reducer
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies } = moviesSlice.actions;

// export action dan reducer
export default moviesReducer;
export { addMovie, updateMovies};