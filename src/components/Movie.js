import React from 'react';

const Movie = (props) => {

// selectMovie = (id) => {
//   props.selectMovieCallback(id);
// };

    return (
      <div className="movie-card">
        <p>id {props.id}</p>
        <p>title {props.title}</p>
        <p>overview {props.overview}</p>
        <p>release date {props.release_date}</p>
        <img src={props.image_url} alt={props.title} /> 
        <button
          className="btn btn-primary movie--select-movie-btn"
          onClick={() => { props.selectMovieCallback(props.id) }}
        >
          Select
        </button>
      </div>
    )
  };

export default Movie;