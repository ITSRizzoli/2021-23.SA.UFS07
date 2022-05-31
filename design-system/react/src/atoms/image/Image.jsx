import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ src }) => {
  return (
    <img src= {src} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
};
