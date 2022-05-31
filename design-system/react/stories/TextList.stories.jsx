import React from 'react';

import { TextList } from '../src/organisms/text-list/TextList';

export default {
  title: 'Example/Organisms/TextList',
  component: TextList,
  argTypes: {
  },
};

const Template = (args) => <TextList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};