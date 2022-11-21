import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieName = "drishyam";
    const response = await movieApi.get(
      `?apikey=c0189c9&s=${movieName}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncMoviesDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesDetail",
  async (id) => {
    const response = await movieApi.get(
      `?apikey=c0189c9&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectMovieDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncMoviesDetail.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, selectMovieDetails: payload };
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieDetail = (state) =>
  state.movies.selectMovieDetails;
export default movieSlice.reducer;
