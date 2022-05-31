import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ text }) => {
  return ( <span> {text} </span>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

Text.defaultProps = {
};
