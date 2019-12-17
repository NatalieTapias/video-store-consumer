import React from 'react';

const Movie = (props) => {
    return (
      <div className="movie-card">
        {/* <p>id {props.id}</p> */}
        <p>title {props.title}</p>
        <p>overview {props.overview}</p>
        <p>release date {props.release_date}</p>
        <img src={props.image_url}  /> 
        {/* to do: add alt text to img tag */}
    
      </div>
    )
  };

export default Movie;