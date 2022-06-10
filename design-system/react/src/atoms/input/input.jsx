import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */

export const Input = ({id, placeHolder, onData, isValid, type, lable}) => {
    function onInput(InputEvent) {
        console.log("Input.onInput",InputEvent);
        if(typeof onData ==='function'){
            onData(InputEvent.target.value)
          }
    } 
    const message= isValid ? "Valore corretto" : "valore errato"
  return (
    <><input
      id={id}
      type={type}
      onInput={onInput}
      placeHolder={placeHolder}
    >
    </input>
    {lable === undefined ? null : <lable htmlFor={id}>{lable}</lable>}
    {isValid === undefined ? null : message}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onData: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string,
  lable: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  onData: undefined,
  isValid: undefined,
  placeHolder: undefined,
  lable: undefined,
};
