import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ id, placeholder, onData, isValid, type, label}) => {

  function onInput(e) {
    console.log("input.onInput", e);
    if(typeof onData === 'function') {
      onData(e.target.value)
    }
  }

  const message = isValid ? "Correct" : "Error"

  return (
    <>

      <input id = {id}
        placeholder = {placeholder}
        onInput = {onInput}
        type = {type}
      >
      </input>

      <label htmlFor={id}> {label === undefined ? null : <label htmlFor={id}> {label} </label>} </label>
      
      {isValid === undefined ? null : message }

    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,

};

Input.defaultProps = {
  id: "1",
  placeholder: undefined,
  type: 'text',
  onData: undefined,
  isValid: undefined,
  label: undefined,
};
