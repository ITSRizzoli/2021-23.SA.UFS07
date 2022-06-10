import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type }) => {

  function onInput (InputEvent) {
    console.log('Input.onData', InputEvent);
    if(typeof onData === 'function') {
      onData(InputEvent.target.value);
    }
    onData(InputEvent.target.value);
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
  /**
   * Button contents
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onData: PropTypes.func,

  isValid: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onData: undefined,
  isValid: undefined,
};
