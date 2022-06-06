import React from 'react';
import PropTypes from 'prop-types';

export const TextBold = ({ text }) => {
  return ( <b> {text} </b>
  );
};

TextBold.propTypes = {
  text: PropTypes.string.isRequired,
};

TextBold.defaultProps = {
  text: 'Insert text',
};
