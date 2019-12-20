import React from 'react';
import { render, cleanup } from '@testing-library/react'
import CustomerList from '../CustomerList';

describe('CustomerList', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <CustomerList 
      allCustomers={[]}
      selectCustomerCallback={() => {}}
      /> 
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});