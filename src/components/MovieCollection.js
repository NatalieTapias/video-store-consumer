import React from 'react';
// import axios from 'axios';
import Movie from './Movie'

const MovieCollection = (props) => {
    return (
       <>
       {console.log("in movie collection", props)}
        { (props.allMovies).map((movie, i) => {
            return(
              
              <Movie 
                id={movie.id}
                key={i}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                image_url={movie.image_url}
                external_id={movie.external_id} />
                
            );
          })
          }
   </>
    );
  };

export default MovieCollection;