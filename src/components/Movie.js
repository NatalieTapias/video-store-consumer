import React from 'react';
import './Movie.css';

const Movie = (props) => {

    return (
      <div class="col-sm-4">
        <div className="card">
          <h3 className="card-title">{props.title}</h3>
          <div className="card-body">
            <img src={props.image_url} alt={props.title} /> 
            <p className="card-text">{props.overview} Released on: {props.release_date}</p>
            <button
              className="btn btn-primary movie--select-movie-btn"
              onClick={() => { props.selectMovieCallback(props.id) }}>
              Select
            </button>
          </div>
        </div>      
      </div>
    )
  };

export default Movie;