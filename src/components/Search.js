import React, { Component } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResult: '',
      searchTerm: '',
      showSearchResult: false,
      noResults: false,
    }
  }

  handleChange = (event) => {
    const newState = {};
    newState.searchTerm = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:3001/movies?query=${this.state.searchTerm}`)
    .then((response) => {

      let foundMovie = response.data;

      const foundState = {
        searchResults: foundMovie,
        showSearchResult: true,};

      const notFoundState = {
        showSearchResult: false,
        noResults: true,};

      foundMovie.length === 0 ? this.setState(notFoundState) : this.setState(foundState)
      console.log(this.state)
  })};


  render() {
    if (this.state.noResults === true) {
      return (
      <p>No movies with that title found</p>
      )
    }
    if (this.state.showSearchResult === false) {
      return (
        <>
        <form onSubmit={this.handleSubmit} className="container-sm">
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              value={this.state.searchTerm}
              placeholder="movie title"
              onChange={this.handleChange} />
            <small id="textHelp">Enter the name of a movie to search on The Movie Database</small>
          </div>
            <input 
              type="submit" 
              value="Submit" 
              onClick={this.handleSubmit}
              className="btn btn-primary" />
        </form>
        
      
      </>
      ) 
    } else {
      return (
        <div className="row">
        {(this.state.searchResults).map((movie, i) => {
        return(
          <SearchResult 
          movie={movie}
          id={movie.id}
          key={i}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          image_url={movie.image_url}
          external_id={movie.external_id}
          addMovieCallback={this.props.addMovieCallback} />
        )})
      }
      </div>
      );
    }
  };
}

export default Search;

Search.propTypes = {
  addMovieCallback: PropTypes.func,
}