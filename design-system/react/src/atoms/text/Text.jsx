import React from 'react';
import PropTypes from 'prop-types';


export const Text = ({ label }) => {
  return (
    <span
     
    >  
    {label}
    </span>
  );
};

Text.propTypes = {
  /**
   * Button contents
   */
   label: PropTypes.string,
};

Text.defaultProps = {
  onClick: undefined,
  type: 'text',
  
  
};
