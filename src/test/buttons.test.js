import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Buttons from '../components/Buttons';

describe('Buttons component', () => {
  test('Test Calculator Buttons', () => {
    const tree = render(
      <BrowserRouter>
        <Buttons onButtonClick={jest.fn()} />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
