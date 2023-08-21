import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from "./Button";

describe('<Button />', () => {
  test('it should render with the provided value', () => {
    const mockOnClick = jest.fn();
    const value = 'Click Me';

    render(<Button onClick={mockOnClick} value={value} />);

    const button = screen.getByTestId('GeneralButton');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(value);
  });
});