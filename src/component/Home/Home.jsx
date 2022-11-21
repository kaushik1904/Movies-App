import React, { useEffect } from "react";
import "./Home.scss";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "./../../features/movieSlices";
import MovieListing from "./../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home_movie">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
