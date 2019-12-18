import React, { Component } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResult: '',
      searchTerm: '',
      showSearchResult: false,
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

      this.setState({ 
        searchResults: foundMovie,
        showSearchResult: true,
      });
      console.log('foundMovie', foundMovie);
    })
    console.log('handleSubmit', this.state.searchTerm);
  
  };


  render() {
    if (this.state.showSearchResult === false) {
      return (
        <>
        <form onSubmit={this.handleSubmit} className="container-sm">
          <div className="form-group">
            <label for="videoSearch">Search for a video:</label>
            <input 
              type="text"
              className="form-control"
              value={this.state.searchTerm}
              placeholder="enter search term here"
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
        <>
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
      </>
      );
    }
  };
}

export default Search;