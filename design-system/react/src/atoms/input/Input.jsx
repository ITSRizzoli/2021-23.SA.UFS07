import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, isValid, type, label }) => {
  function onInput (inputEvent)
  {
    console.log("input.onInput", inputEvent);
    if(typeof onData === 'function'){
      onData(inputEvent.target.value)
    }
    onData(inputEvent.target.value)
  }

  const message = isValid ? "Valore buono" : "Valore cattivo";
  return (
    <>
      <input id={id}
      onInput={onInput}
      type={type}
      placeholder={placeholder}
    >
    </input>,
    {label === undefined ? null : <label htmlFor={id}>{label}</label>}
    {isValid === undefined ? null : message}
    </>

  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  label : PropTypes.string,
};

Input.defaultProps = {
  id: "iRadio",
  type: 'text',
  onData: undefined,
  isValid: undefined,
  placeholder: undefined,
  label: undefined,
};
