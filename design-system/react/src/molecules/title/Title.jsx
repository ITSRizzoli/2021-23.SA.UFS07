import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/text-bold/TextBold';
import { TextItalic } from '../../atoms/text-italic/TextItalic';


export const Title = ({ text }) => {
  return ( <h1> {text} </h1>
  );
};

Title.propTypes = {
  text: [ Text, TextBold, TextItalic]
};

Title.defaultProps = {
};
