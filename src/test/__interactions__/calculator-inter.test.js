import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator ', () => {
  beforeEach(async () => {
    render(<Calculator />);
  });

  test('should be displayed', () => {
    // Find the heading element
    const headingElement = screen.getByTestId('subtitle');
    expect(headingElement).toHaveTextContent('Lets Do some math!');
  });

  test('should update display when buttons are clicked', () => {
    // Find the display element
    const displayElement = screen.getByTestId('display');

    // Find the buttons
    const btnOne = screen.getByText('1');
    const btnTwo = screen.getByText('2');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');

    // Simulate button clicks
    fireEvent.click(btnOne);
    fireEvent.click(addButton);
    fireEvent.click(btnTwo);
    fireEvent.click(equalsButton);

    // Verify the updated display
    expect(displayElement).toHaveTextContent('3');

    // Simulate button clicks
    fireEvent.click(screen.getByText('AC'));// clear or reset screen

    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    // Check if the display shows the correct result
    expect(displayElement).toHaveTextContent('12');
  });
});
