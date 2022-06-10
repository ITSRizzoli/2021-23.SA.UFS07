import React from 'react';

import { Title } from '../src/molecules/title/Title';
import { Text } from '../src/atoms/text/Text';
import { TextBold } from '../src/atoms/text-bold/TextBold';
import { TextItalic } from '../src/atoms/text-italic/TextItalic';

export default {
  title: 'Example/Molecules/Title',
  component: Title,
  argTypes: {
  },
};

const Template = (args) => <Title {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};