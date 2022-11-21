import React from "react";
import "./MovieListing.scss";
import MovieCard from "./../MoviesCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movieSlices";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <h1>{movies.error}</h1>
    );
  return (
    <div className="movie_wrapper">
      <div className="movie_list">
        <div className="movie_container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
