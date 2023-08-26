import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, operation, next } = props;
  return (
    <div className="display">
      <p>
        {total }
        {operation}
        {next}
      </p>
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: '',
  next: '',
};

export default Display;
