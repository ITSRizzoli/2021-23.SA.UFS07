import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/textBold/TextBold';
import { TextItalic } from '../../atoms/text/TextItalic';


export const Paragraph = ({ text }) => {
  return ( <p> {text} </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  //onSubmit: undefined,
};
