import React from 'react';

import { Form } from '../src/molecules/form/Form';

export default {
  title: 'Example/Molecules/Form',
  component: Form,
  argTypes: {
  },
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};