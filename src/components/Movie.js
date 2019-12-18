import React from 'react';
import './Movie.css';

const Movie = ({title, image_url, overview, release_date, selectMovieCallback, id}) => {

    return (
      <div class="col-sm-4">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <div className="card-body">
            <img src={image_url} alt={title} /> 
            <p className="card-text">{overview} Released on: {release_date}</p>
            <button
              className="btn btn-primary movie--select-movie-btn"
              onClick={() => { selectMovieCallback(id) }}>
              Select
            </button>
          </div>
        </div>      
      </div>
    )
  };

export default Movie;