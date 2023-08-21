import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataLabel from './DataLabel';

describe('<DataLabel />', () => {
  test('it should mount', () => {
    render(<DataLabel label={"Data"} />);
    
    const dataLabel = screen.getByTestId('DataLabel');

    expect(dataLabel).toBeInTheDocument();
  });
});