import React from 'react';
import { render } from '@testing-library/react';
import DisplayResult from '../components/Display';

describe('Display result component', () => {
  test('render result correctly', () => {
    const { container } = render(<DisplayResult />);
    expect(container).toMatchSnapshot();
  });
});
