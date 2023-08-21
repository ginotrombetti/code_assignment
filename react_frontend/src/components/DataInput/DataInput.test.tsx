import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataInput from './DataInput';

describe('<DataInput />', () => {
  test('it should mount', () => {
    const onChangeMock = jest.fn();

    render(<DataInput value={1} onChange={onChangeMock}/>);
    
    const dataInput = screen.getByTestId('DataInput');

    expect(dataInput).toBeInTheDocument();
  });
});