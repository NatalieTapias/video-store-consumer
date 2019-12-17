import React from 'react';

const SelectedMovie = (props) => {
  return (
    <div>
      <p>{props.movie.title}</p>
      <img src={props.movie.image_url}  alt={props.movie.title}/>
    </div>
  );
}

export default SelectedMovie;