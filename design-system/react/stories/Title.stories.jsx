import React from 'react';

import { Title } from '../src/molecules/title/Title';
import { Text } from '../../atoms/text/Text';
import { TextBold } from '../../atoms/text-bold/TextBold';
import { TextItalic } from '../../atoms/text-italic/TextItalic';

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
  text: <TextItalic text='ciao'/>
};