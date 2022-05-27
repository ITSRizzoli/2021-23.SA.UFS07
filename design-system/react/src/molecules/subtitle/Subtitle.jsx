import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/textBold/TextBold';
import { TextItalic } from '../../atoms/text/TextItalic';


export const Subtitle = ({ text }) => {
  return ( <><Text /> <TextBold /> <TextItalic /></>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

Subtitle.defaultProps = {
  //onSubmit: undefined,
};
