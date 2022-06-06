import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, isValid, type }) => {
  return (
    <input
      onInput={onData}
      placeholder={placeholder}
      type={type}
    >
    </input>
  );
};
function onData(InputEvent)
{
  console.log("input.onData", InputEvent)
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  onData: "undefined",
  isValid: "undefined",
};
