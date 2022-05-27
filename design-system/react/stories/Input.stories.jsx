import React from 'react';

import { Input } from '../src/atoms/input/Input';

export default {
  title: 'Example/Atoms/Input',
  component: Input,
  argTypes: {
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  placeholder: 'Insert',
};