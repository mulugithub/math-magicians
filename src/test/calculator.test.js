import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
