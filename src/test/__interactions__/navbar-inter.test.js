import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

test('Navbar renders heading, title, and links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  // Verify heading
  const headingElement = screen.getByRole('heading', { level: 1, name: 'Math Magicians' });
  expect(headingElement).toBeInTheDocument();

  // Verify links
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toBe('/');

  const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
  expect(calculatorLink).toBeInTheDocument();
  expect(calculatorLink.getAttribute('href')).toBe('/Calculator');

  const quotesLink = screen.getByRole('link', { name: 'Quotes' });
  expect(quotesLink).toBeInTheDocument();
  expect(quotesLink.getAttribute('href')).toBe('/Quotes');
});
