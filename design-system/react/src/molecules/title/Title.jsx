import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/textBold/TextBold';
import { TextItalic } from '../../atoms/text/TextItalic';


export const Title = ({ text }) => {
  return ( <Text />
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  //onSubmit: undefined,
};
