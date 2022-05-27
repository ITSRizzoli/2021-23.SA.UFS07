import React from 'react';
import PropTypes from 'prop-types';

export const TextItalic = ({ text }) => {
  return ( <i> {text} </i>
  );
};

TextItalic.propTypes = {
  text: PropTypes.string.isRequired,
};

TextItalic.defaultProps = {
  //onData: undefined,
};
