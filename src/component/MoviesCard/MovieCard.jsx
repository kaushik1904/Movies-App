import React from "react";
import './MovieCard.scss'

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card_item">
      <div className="card_inner">
        <div className="card_top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card_bottom">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
