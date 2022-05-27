import React from 'react';

import { TextItalic } from '../src/atoms/text-italic/TextItalic';

export default {
  title: 'Example/Atoms/TextItalic',
  component: TextItalic,
  argTypes: {
  },
};

const Template = (args) => <TextItalic {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};