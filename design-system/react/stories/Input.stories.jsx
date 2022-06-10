import React from 'react';

import { Input } from '../src/atoms/input/input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const InputText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputText.args = {
  placeHolder: "A placeholder text",
  type:"text",
  onData: undefined,
  isValid: undefined,
  id: "IdText"
};

export const InputRadio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputRadio.args = {
  placeHolder: undefined,
  type:"radio",
  onData: undefined,
  isValid: undefined,
  id: "IdRadio",
  lable: "Sium"
};

