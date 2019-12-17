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
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>Search for a video:</label>
            <textarea
              value={this.state.searchTerm}
              placeholder="enter movie title here"
              onChange={this.handleChange} />
          </span>
            <input 
              type="submit" 
              value="Submit" 
              onClick={this.handleSubmit}/>
        </form>
        
      
      </>
      ) 
    } else {
      return (
        <>
        {(this.state.searchResults).map((movie, i) => {
        return(
          <SearchResult 
          id={movie.id}
          key={i}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          image_url={movie.image_url}
          external_id={movie.external_id} />
        )})
      }
      </>
      );
    }
  };
}

export default Search;