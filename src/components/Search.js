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
      movieSought: '',
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

      const foundMovie = response.data;

      const foundState = {
        searchResults: foundMovie,
        showSearchResult: true,};

      const notFoundState = {
        showSearchResult: false,
        noResults: true,
        movieSought: this.state.searchTerm};
      
      foundMovie.length === 0 ? this.setState(notFoundState) : this.setState(foundState)
  })};

  refreshPage = () => {
    window.location.reload(false)
  }

  render() {
    if (this.state.noResults === true) {
      return (
    <div className="try-again">
    <h1>No Results</h1>
    <h3>No movies with title <em> {this.state.movieSought} </em >found</h3><br/>
    <button className="btn btn-primary--search-again"  onClick={() => window.location.reload(false)}>Search again</button>

    </div>
      )
    }
    else if (this.state.showSearchResult === false) {
      return (
        <>
        <h1>Search</h1>
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
              className="btn btn-primary"  />
        </form>
        
      
      </>
      ) 
    } else {
      return (
        <section>
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
      <div className="try-again">
        <br/>
        <button className="btn btn-primary--search-again" onClick={() => window.location.reload(false)}>Search again</button><br/>
      </div>
      </section>
      
      );
    }
  };
}

export default Search;

Search.propTypes = {
  addMovieCallback: PropTypes.func,
}