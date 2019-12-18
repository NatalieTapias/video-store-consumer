import React from 'react';
import Movie from './Movie'
import PropTypes from 'prop-types';

const MovieCollection = ({allMovies, selectMovieCallback}) => {

    return (
      <>
      <h2 className="title">Rental Library</h2>
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
            )
          })}
        </div>
      </>
    );
  };

export default MovieCollection;

MovieCollection.propTypes = {
  allMovies: PropTypes.array,
  selectMovieCallback: PropTypes.func,
};