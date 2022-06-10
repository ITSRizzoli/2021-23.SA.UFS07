import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';
import { Text } from '../src/atoms/text/Text'
import { TextBold } from '../src/atoms/text-bold/TextBold'
import { TextItalic } from '../src/atoms/text-italic/TextItalic'

export default {
  title: 'Example/Molecules/Paragraph',
  component: Paragraph,
  argTypes: {
  },
};

const Template = (args) => <Paragraph {...args} />

export const Primary = Template.bind({});
Primary.args = {
};