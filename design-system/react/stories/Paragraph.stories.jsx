import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';

export default {
  title: 'Example/Molecules/Paragraph',
  component: Paragraph,
  argTypes: {
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Insert text',
  textBold: 'Insert text',
  textItalic: 'Insert text'
};