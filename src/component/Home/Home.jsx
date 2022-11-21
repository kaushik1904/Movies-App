import React, { useEffect, useState } from "react";
import "./Home.scss";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "./../../features/movieSlices";
import MovieListing from "./../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieName));
  }, [dispatch, movieName]);
  return (
    <div className="home">
      <div className="home_search_container">
        <form action="#" className="home_search" onSubmit={submitHandler}>
          <input
          placeholder="Search movie"
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="home_movie">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
