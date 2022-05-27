import React from 'react';

import { TextBold } from '../src/atoms/text-bold/TextBold';

export default {
  title: 'Example/Atoms/TextBold',
  component: TextBold,
  argTypes: {
  },
};

const Template = (args) => <TextBold {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};