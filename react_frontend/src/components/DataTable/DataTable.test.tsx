import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTable from './DataTable';

describe('<DataTable />', () => {
  test('it should mount', () => {
    render(<DataTable  sampleMean={3} sampleSize={3} standardDeviation={4}/>);
    
    const dataTable = screen.getByTestId('DataTable');

    expect(dataTable).toBeInTheDocument();
  });
});