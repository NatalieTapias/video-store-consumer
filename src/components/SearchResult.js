import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const SearchResult = ({title, overview, release_date, movie, addMovieCallback, image_url}) => {

  return (
    <p>
      <p>title {title}</p>
      <p>overview {overview}</p>
      <p>release date {release_date}</p>
      <img src={image_url}  alt={title}/>
      <button onClick={ () => { addMovieCallback(movie)} }> Add {title} to Rental Library</button>
    </p>
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
}