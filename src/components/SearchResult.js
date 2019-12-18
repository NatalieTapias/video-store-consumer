import React from 'react';

const SearchResult = (props) => {

  return (
    <p>
      <p>title {props.title}</p>
      <p>overview {props.overview}</p>
      <p>release date {props.release_date}</p>
      <img src={props.image_url}  alt={props.title}/>
      <button onClick={ () => { props.addMovieCallback(props.movie)} }> Add {props.title} to Rental Library</button>
    </p>
  )
}

export default SearchResult;