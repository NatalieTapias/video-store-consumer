import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const Movie = ({title, image_url, overview, release_date, selectMovieCallback, id}) => {

    return (
      <div className="col-sm-4">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <div className="card-body">
            <img src={image_url} alt={title} /> 
            <p className="card-text">{overview} Released on: {release_date}</p>
            <button
              className="btn btn-primary"
              onClick={() => { selectMovieCallback(id) }}>
              Select
            </button>
          </div>
        </div>      
      </div>
    )
  };

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string, 
  overview: PropTypes.string, 
  release_date: PropTypes.string, 
  selectMovieCallback: PropTypes.func, 
  id: PropTypes.number,
};