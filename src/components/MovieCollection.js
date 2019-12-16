import React, { Component } from 'react';
import Movie from './Movie'

class MovieCollection extends Component {
  render() {
    return (
      <>
        <p>collection of movies</p>
        <Movie />
      </>
    );
    }
  };

export default MovieCollection;