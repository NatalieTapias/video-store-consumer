import React from 'react';
import Movie from './Movie'

const MovieCollection = ({allMovies, selectMovieCallback}) => {

    return (
      <div className="row">
      {(allMovies).map((movie, i) => {
        return(
        <Movie 
          id={movie.id}
          key={i}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          image_url={movie.image_url}
          external_id={movie.external_id}
          selectMovieCallback={selectMovieCallback}    /> 
    )   })}
      </div>
    );
  };

export default MovieCollection;