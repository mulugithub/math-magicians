import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Home />);
    const header = getByText('Welcome to our page!');
    expect(header).toBeTruthy();
  });

  test('Home renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
