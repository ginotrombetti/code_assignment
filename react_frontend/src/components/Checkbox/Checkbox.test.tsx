import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  test('it should render with the provided label', () => {
    const label = 'Check me';
    render(<Checkbox label={label} checked={false} onChange={() => {}} />);

    const checkboxLabel = screen.getByText(label);
    expect(checkboxLabel).toBeInTheDocument();
  });
});