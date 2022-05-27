import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/text-bold/TextBold';
import { TextItalic } from '../../atoms/text-italic/TextItalic';


export const Paragraph = ({ text, textBold, textItalic }) => {
  return ( <p> {text} </p>
  );
};

Paragraph.propTypes = {
  text: Text,
  textBold: TextBold,
  textItalic: TextItalic
};

Paragraph.defaultProps = {
};
