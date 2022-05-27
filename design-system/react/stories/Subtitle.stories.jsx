import React from 'react';

import { Subtitle } from '../src/molecules/subtitle/Subtitle';

export default {
  title: 'Example/Molecules/Subtitle',
  component: Subtitle,
  argTypes: {
  },
};

const Template = (args) => <Subtitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};