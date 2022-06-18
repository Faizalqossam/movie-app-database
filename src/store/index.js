//import configureStore
import { configureStore } from "@reduxjs/toolkit/";
import moviesReducer from "../features/moviesSlices";

/**
 * Buat store = state global.
 * Menyimpan berbagai reducer.
 */

const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});

export default store;

