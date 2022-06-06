import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, onData, type }) => {

  function onInput(e) {
    console.log("input.onInput", e);
    if(typeof onData === 'function') {
      onData(e.target.value)
    }
  }

  return (
    <input
      placeholder = {placeholder}
      onInput = {onInput}
      type = {type}
    >
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onData: undefined,
  isValid: false,
};
