import React from 'react';

const Movie = (props) => {
    return (
      <>
        <p>id {props.id}</p>
        <p>title {props.title}</p>
        <p>overview {props.overview}</p>
        <p>release date {props.release_date}</p>
        {console.log(props)}
      </>
    )
  };

export default Movie;