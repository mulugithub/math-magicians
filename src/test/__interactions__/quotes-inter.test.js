import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Quotes from '../../components/Quotes';

const server = setupServer(
  rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
    ctx.json([
      { quote: 'Quote 1', author: 'Author 1' },
      { quote: 'Quote 2', author: 'Author 2' },
    ]),
  )),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Quotes component fetches and renders quotes', async () => {
  render(<Quotes />);

  // Verify loading state
  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();

  // Wait for quotes to be fetched and rendered
  await waitFor(() => {
    const quote1Element = screen.getByText('Quote 1');
    const quote2Element = screen.getByText('Quote 2');
    const author1Element = screen.getByText('Author 1');
    const author2Element = screen.getByText('Author 2');

    expect(quote1Element).toBeInTheDocument();
    expect(quote2Element).toBeInTheDocument();
    expect(author1Element).toBeInTheDocument();
    expect(author2Element).toBeInTheDocument();
  });
});

test('Quotes component handles fetch error', async () => {
  server.use(
    rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(ctx.status(500))),
  );

  render(<Quotes />);

  // Wait for error message to be rendered
  await waitFor(() => {
    const errorElement = screen.getByText('Error while fetching data...');
    expect(errorElement).toBeInTheDocument();
  });
});
