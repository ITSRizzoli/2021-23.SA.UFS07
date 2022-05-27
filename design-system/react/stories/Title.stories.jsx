import React from 'react';

import { Title } from '../src/molecules/title/Title';

export default {
  title: 'Example/Molecules/Title',
  component: Title,
  argTypes: {
  },
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};