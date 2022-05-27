import React from 'react';

import { LoginForm } from '../src/organisms/login-form/LoginForm';

export default {
  title: 'Example/Organisms/LoginForm',
  component: LoginForm,
  argTypes: {
  },
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Insert text'
};