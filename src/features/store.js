import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlices";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
