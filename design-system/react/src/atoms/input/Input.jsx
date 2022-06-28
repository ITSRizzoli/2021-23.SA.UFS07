import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({isValid, placeholder, onClick, type,onData, label,id}) => {
  function onInput(InputEvent){
    console.log("input.onInput", InputEvent);
    if(typeof onData ==="function"){
      onData(InputEvent.target.value)
    }
    }
    const message= isValid? "valore valido" : "valore non corretto"
  return (
    <>
    <input
        id={id}
        onClick={onClick}
        type={type}
        placeholder={placeholder}
        onInput={onInput}
    >
      
    </input>
    {label === undefined? null:<label htmlFor={id}>{label}</label>}
    {isValid===undefined?null:message}
     </>
  );
};

Input.propTypes = {
  /**
   * input contents
   */
  id:PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onData:PropTypes.func,
  isValid:PropTypes.bool,
  type:PropTypes.string,
  label:PropTypes.string,
  /**
   * Optional click handler
   */
 
};

Input.defaultProps = {
  type: "radio",
  onData:undefined,
  isValid:undefined,
  label:undefined,
};
