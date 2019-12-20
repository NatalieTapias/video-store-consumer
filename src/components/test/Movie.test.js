import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Movie from '../Movie';

describe('Movie', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Movie 
      id={3}
      key={3}
      title={"excellent movie"}
      overview={"movie.overview"}
      release_date={"movie.release_date"}
      image_url={"movie.image_url"}
      external_id={"movie.external_id"}
      selectMovieCallback={() => {}} 
      /> 
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});