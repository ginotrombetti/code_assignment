import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataForm from './DataForm';

describe('<DataForm />', () => {
  test('it should render loading text when isLoading is true', () => {
    render(<DataForm />);

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});