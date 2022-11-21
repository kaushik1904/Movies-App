import React, { useEffect, useState } from "react";
import "./Home.scss";

import movieApi from "./../../common/api/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "./../../features/movieSlices";
import MovieListing from "./../MovieListing/MovieListing";
const Home = () => {
  const [movieName, setMovieName] = useState("Drishyam");
  const dispatch = useDispatch();

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
  }, [movieName]);
  return (
    <div className="home">
      <div className="home_search_container">
        <form
          action="#"
          className="home_search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" onChange={(e) => setMovieName(e.target.value)} />
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
