import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../../components/Buttons';

test('calls onButtonClick when a button is clicked', () => {
  // Create a mock function for onButtonClick
  const onButtonClickMock = jest.fn();

  // Render the Buttons component
  const { getByText } = render(<Buttons onButtonClick={onButtonClickMock} />);

  // Simulate a button click
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('0'));

  // Check if onButtonClick is called with the correct symbol
  expect(onButtonClickMock).toHaveBeenCalledWith('7');
  expect(onButtonClickMock).toHaveBeenCalledWith('+');
  expect(onButtonClickMock).toHaveBeenCalledWith('0');
});
