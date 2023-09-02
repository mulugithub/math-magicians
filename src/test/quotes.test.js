import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes component', () => {
  test('render Quotes correctly', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });
});
