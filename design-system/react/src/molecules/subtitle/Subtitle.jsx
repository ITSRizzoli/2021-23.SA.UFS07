import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/text-bold/TextBold';
import { TextItalic } from '../../atoms/text-italic/TextItalic';


export const Subtitle = ({ text }) => {
  return ( <h2>{text}</h2>
  );
};

Subtitle.propTypes = {
  text: [ Text, TextBold, TextItalic]
};

Subtitle.defaultProps = {
};
