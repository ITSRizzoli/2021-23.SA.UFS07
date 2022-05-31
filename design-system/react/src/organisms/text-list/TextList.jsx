import React from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from '../../molecules/paragraph/Paragraph';

export const TextList = ({ text }) => {
  return ( <ul> <li></li></ul>
  );
};

TextList.propTypes = {
  elements: Paragraph
};

TextList.defaultProps = {
};
