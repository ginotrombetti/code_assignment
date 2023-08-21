import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  test('it should mount', () => {
    render(<ErrorMessage message={"error"}/>);
    
    const errorMessage = screen.getByTestId('ErrorMessage');

    expect(errorMessage).toBeInTheDocument();
  });
});