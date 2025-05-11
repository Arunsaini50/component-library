import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type = 'text', placeholder = '', value, onChange, name, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        name={name} // ✅ yeh zaroori hai
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired, 
  className: PropTypes.string,
};

export default Input;
