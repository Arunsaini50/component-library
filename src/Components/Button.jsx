// /components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = 'px-4 py-2 rounded font-medium transition duration-200';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
