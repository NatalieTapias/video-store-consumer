import React from 'react';

const Movie = (props) => {

    return (
      <>
    <p>id {props.id}</p>
    <p>title {props.title}</p>
   {console.log(props)}
    </>
    );
    
  };

export default Movie;