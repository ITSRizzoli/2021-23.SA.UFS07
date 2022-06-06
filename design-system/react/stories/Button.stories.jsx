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

export const PrimaryReset = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryReset.args = {
  primary: true,
  label: 'Button',
  type: 'reset',
};
export const PrimarySubmit = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimarySubmit.args = {
  primary: true,
  label: 'Button',
  type: 'reset',
};
export const PrimaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButton.args = {
  primary: true,
  label: 'Button',
  type: 'button',
};
export const SecondaryReset = Template.bind({});
SecondaryReset.args = {
  label: 'Button',
};
export const SecondarySubmit = Template.bind({});
SecondarySubmit.args = {
  label: 'Button',
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
