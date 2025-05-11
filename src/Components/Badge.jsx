import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ text, color = 'green' }) => {
  const colors = {
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${colors[color] || colors.green}`}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'red', 'yellow', 'blue']),
};

export default Badge;
