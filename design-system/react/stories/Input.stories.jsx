import React from 'react';

import { Input } from '../src/atoms/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
    placeholder:"Name",
    onInput:undefined,
    id: "input_text",
    isValid:undefined,
    type:"text",
    label: undefined,
};   

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
    placeholder:"Password",
    onInput:undefined,
    id: "input_password",
    isValid:undefined,
    type:"password",
    label: undefined,
};   

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Radio.args = {
    label: undefined,
    id: "input_radio",
    placeholder:undefined,
    onInput:undefined,
    isValid:undefined,
    type:"radio",
};   