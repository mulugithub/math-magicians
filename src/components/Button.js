import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ symbol, onClick }) => (
  <button type="button" className="button" onClick={() => onClick(symbol)}>
    {symbol}
  </button>
);

export const Operator = ({ symbol, onClick }) => (
  <button type="button" className="button operator" onClick={() => onClick(symbol)}>
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Operator.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
