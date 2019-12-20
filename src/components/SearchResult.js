import React from 'react';
import PropTypes from 'prop-types';
import MovieCollection from './MovieCollection'

const SearchResult = ({title, overview, release_date, movie, addMovieCallback, image_url, external_id}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <div className="card-body">
          <img src={image_url}  alt={title}/>
          <p>{overview}</p>
          <p>release date: {release_date}</p>
          <p> external id from TheMovieDB: {external_id}</p>
          <p>external id from internal DB: </p>
          <button onClick={ () => { addMovieCallback(movie)} } className="btn btn-primary"> Add {title} to Rental Library</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;

SearchResult.propTypes = {
  title: PropTypes.string, 
  overview: PropTypes.string,
  release_date: PropTypes.string, 
  movie: PropTypes.object, 
  addMovieCallback: PropTypes.func, 
  image_url: PropTypes.string,
  external_id: PropTypes.number,
}