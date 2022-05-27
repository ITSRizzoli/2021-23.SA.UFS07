import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/textBold/TextBold';
import { TextItalic } from '../../atoms/text/TextItalic';


export const Subtitle = ({ text }) => {
  return ( <h2>{text}</h2>
  );
};

Subtitle.propTypes = {
  text: Text
};

Subtitle.defaultProps = {
  //onSubmit: undefined,
};
