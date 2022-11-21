import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import movieApi from "./../../common/api/movieApi";
import { addMovies } from "../../features/movieSlices";
import MovieListing from "./../MovieListing/MovieListing";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState("Pushpa");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&apikey=c0189c9&s=${movieName}&type=movie`)
        .catch((err) => {
          console.log("this is error msg" + err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  },[movieName]);

  return (
    <div className="home">
      <div className="home_search_container">
        <form className="home_search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search any thing"
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button type="submit">
            {/* <i class="fas fa-search"></i> */}
            search
          </button>
        </form>
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
