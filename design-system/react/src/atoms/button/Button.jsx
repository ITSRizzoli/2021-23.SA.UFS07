import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick, type }) => {
  return (
    <button onClick={onClick} type="button"> {label} </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: undefined,
};
