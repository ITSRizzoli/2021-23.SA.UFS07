import React from 'react';

import { Input } from '../src/atoms/input/Input';

export default {
  title: 'Example/Atoms/Input',
  component: Input,
};
const Template = (args) => <input {...args} />;

export const Input = Template.bind({});
Input.args = {
  placeholder: "a random placeholder",
  onData: undefined,
  isValid: undefined,
};