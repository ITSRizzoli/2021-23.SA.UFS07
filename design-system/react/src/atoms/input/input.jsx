import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeHolder, onData, type}) => {
    function onInput(InputEvent) {
        console.log("Input.onInput",InputEvent);
        if(typeof onData ==='function'){
            onData(InputEvent.target.value)
          }
    } 
  return (
    <input
      type={type}
      onInput={onInput}
      placeHolder={placeHolder}
    >
    </input>
  );
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  onData: undefined,
  isValid: undefined,
};
