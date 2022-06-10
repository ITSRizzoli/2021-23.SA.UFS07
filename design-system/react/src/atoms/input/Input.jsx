import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type, isValid }) => {
    function onInput(InputEvent){

        console.log('Input.onInput', InputEvent);
        
        if (typeof onData === 'function'){
            onData(InputEvent.target.value);

        }
    }

  const message = isValid ? 'valore corretto' : 'valore non corretto'
  
    return (
    <>
      <input
      onInput={onInput}
      type={type}
      placeholder={placeholder}
    >   
    </input>
    {isValid === undefined ? null : message}
    </>
  );
};

Input.propTypes = {

  placeholder: PropTypes.string.isRequired,

  onData: PropTypes.func,

  isValid: PropTypes.bool,

  type: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: 'text',
  isValid: undefined,
};
