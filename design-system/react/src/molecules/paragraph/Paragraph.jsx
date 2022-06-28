import React from 'react';
import PropTypes from 'prop-types';


export const Paragraph = ({ label, testo}) => {
  return (
    <span
     
    >  
    {label},
    {testo}
    </span>
  );
};

Paragraph.propTypes = {
  /**
   * Button contents
   */
   label: PropTypes.string,
   testo: PropTypes.string,

};

Paragraph.defaultProps = {
  onClick: undefined,
  type: 'text',
  
  
};
