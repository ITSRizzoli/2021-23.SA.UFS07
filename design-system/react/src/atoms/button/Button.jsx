import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}> {label}
    </button>
  );
};

// what types of parameters it accepts.
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type: 'button'
};
