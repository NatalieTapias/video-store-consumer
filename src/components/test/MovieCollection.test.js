import React from 'react';
import { render, cleanup } from '@testing-library/react'
import MovieCollection from '../MovieCollection';

describe('MovieCollection', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <MovieCollection 
      allMovies={[]} selectMovieCallback={() => {}}
      /> 
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});