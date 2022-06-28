import React from 'react';

import { Text } from '../src/atoms/text/Text';
export default {
    title: 'Example/Atoms/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
     
    },
  };
  const Template = (args) => <Text {...args} />;

export const Textprova = Template.bind({});
Textprova.args = {
  label:"gang",
  
  
};