import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onClick, isValid, type }) => {
  return ( <input placeholder = {placeholder} onData = {onData} isValid = {isValid} type = {type} ></input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  onData: undefined,
};
