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
  placeholder: 'Insert text',
  onData: undefined,
};

export const Button = Template.bind({});
Button.args = {
  placeholder: 'Insert button text',
  type: 'button',
  onData: undefined,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  placeholder: 'Insert checkbox text',
  type: 'checkbox',
  onData: undefined,
};

export const Color = Template.bind({});
Color.args = {
  placeholder: 'Insert color text',
  type: 'color',
  onData: undefined,
};

export const Date = Template.bind({});
Date.args = {
  placeholder: 'Insert date text',
  type: 'date',
  onData: undefined,
};

export const DatetimeLocal = Template.bind({});
DatetimeLocal.args = {
  placeholder: 'Insert datetimelocal text',
  type: 'datetime-local',
  onData: undefined,
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'Insert email text',
  type: 'email',
  onData: undefined,
};

export const File = Template.bind({});
File.args = {
  placeholder: 'Insert file text',
  type: 'file',
  onData: undefined,
};

export const Hidden = Template.bind({});
Hidden.args = {
  placeholder: 'Insert hidden text',
  type: 'hidden',
  onData: undefined,
};

export const Img = Template.bind({});
Img.args = {
  placeholder: 'Insert image text',
  type: 'image',
  onData: undefined,
};

export const Month = Template.bind({});
Month.args = {
  placeholder: 'Insert month text',
  type: 'month',
  onData: undefined,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Insert password',
  type: 'password',
  onData: undefined,
};

export const Radio = Template.bind({});
Radio.args = {
  placeholder: 'Insert radio text',
  type: 'radio',
  onData: undefined,
};

export const Range = Template.bind({});
Range.args = {
  placeholder: 'Insert range text',
  type: 'range',
  onData: undefined,
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Insert search text',
  type: 'search',
  onData: undefined,
};

export const Submit = Template.bind({});
Submit.args = {
  placeholder: 'Insert submit text',
  type: 'submit',
  onData: undefined,
};

export const Tel = Template.bind({});
Tel.args = {
  placeholder: 'Phone number',
  type: 'tel',
  onData: undefined,
};

export const Time = Template.bind({});
Time.args = {
  placeholder: 'Insert time text',
  type: 'time',
  onData: undefined,
};

export const Url = Template.bind({});
Url.args = {
  placeholder: 'Insert url',
  type: 'url',
  onData: undefined,
};

export const Week = Template.bind({});
Week.args = {
  placeholder: 'Insert week text',
  type: 'week',
  onData: undefined,
};