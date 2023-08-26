import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ symbol }) => (
  <button type="button" className="button">
    {symbol}
  </button>
);

export const Operator = ({ symbol }) => (
  <button type="button" className="button operator">
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

Operator.propTypes = {
  symbol: PropTypes.string.isRequired,
};
