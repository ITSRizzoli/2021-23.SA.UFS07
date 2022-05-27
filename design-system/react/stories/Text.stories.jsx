import React from 'react';

import { Text } from '../src/atoms/text/Text';

export default {
  title: 'Example/Atoms/Text',
  component: Text,
  argTypes: {
  },
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};