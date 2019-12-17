import React from 'react';

const Movie = (props) => {
    return (
      <div className="movie-card">
        {/* <p>id {props.id}</p> */}
        <p>title {props.title}</p>
        <p>overview {props.overview}</p>
        <p>release date {props.release_date}</p>
        <img src={props.image_url} alt={props.title} /> 
      </div>
    )
  };

export default Movie;