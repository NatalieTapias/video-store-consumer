import React from 'react';

const SelectedMovie = (props) => {
  return (
    <div>
      <h3>Selected movie: {props.movie.title}</h3>
      <img src={props.movie.image_url}  alt={props.movie.title}/>
    </div>
  );
}

export default SelectedMovie;