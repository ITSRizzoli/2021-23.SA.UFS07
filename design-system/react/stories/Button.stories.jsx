import React from 'react';

import { Button } from '../src/atoms/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Buttom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Buttom.args = {
  primary: true,
  label: 'Button',
  type: 'button',
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'Button',
  type: 'submit',
};

export const Reset = Template.bind({});
Reset.args = {
  label: 'Button',
  type: 'reset',
};

