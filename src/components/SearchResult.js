import React from 'react';
import PropTypes from 'prop-types';
// import MovieCollection from './MovieCollection'

const SearchResult = ({title, overview, release_date, movie, addMovieCallback, image_url, external_id, allMovies}) => {
  // if else to determine button
// if external_id of found movie matches external_id of a movie in the rental library , no button
// some is like find but returns true or false
// otherwise,

const alreadyInLibrary = (movie) => {
  return movie.external_id === external_id;
}

console.log(allMovies.some(alreadyInLibrary))

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