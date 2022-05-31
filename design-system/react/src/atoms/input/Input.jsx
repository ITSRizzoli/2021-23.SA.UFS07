import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, onData, isValid, type }) => {
  return ( <input placeholder = {placeholder} onData = {onData} isValid = {isValid} type = {type}></input>
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
