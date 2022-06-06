import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type }) => {
    function onInput(InputEvent){
        
        console.log('Input.onInput', InputEvent);
    }
  return (
    <input
      onInput={onInput}
      type={type}
      placeholder={placeholder}
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
  onData: undefined,
  type: 'text',
  isValid: undefined,
};
