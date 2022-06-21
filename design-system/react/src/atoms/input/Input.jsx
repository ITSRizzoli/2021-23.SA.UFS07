import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type, isValid, label, id }) => {
    function onInput(InputEvent){

        console.log('Input.onInput', InputEvent);
        
        if (typeof onData === 'function'){
            onData(InputEvent.target.value);

        }
    }

  const message = isValid ? ' valore corretto' : ' valore non corretto'
  
    return (
    <>
      <input id={id}
      onInput={onInput}
      type={type}
      placeholder={placeholder}
    >   
    </input>
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
  label: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: 'text',
  isValid: undefined,
  placeholder: undefined,
  label: undefined,
};
