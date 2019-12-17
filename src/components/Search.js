import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    const newState = {};
    newState.searchTerm = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this is where we submit the api request & a callback function?
    console.log('handleSubmit', this.state.searchTerm);
    this.setState = {
      searchTerm: ''
    };
  };


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>Search for a video: </label>
        <textarea
          value={this.state.searchTerm}
          placeholder="enter search term here"
          name="searchbar"
          onChange={this.handleChange} />
      </div>

      <div>
        <input 
          type="submit" 
          value="Submit" 
          onClick={this.handleSubmit}/>
      </div>

    </form>
    );
    }
  };

export default Search;