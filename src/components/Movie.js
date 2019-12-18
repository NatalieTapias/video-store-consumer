import React from 'react';

const Movie = (props) => {

// selectMovie = (id) => {
//   props.selectMovieCallback(id);
// };

    return (
      <div class="col-sm-6">
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