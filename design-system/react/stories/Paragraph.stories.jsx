
import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';

export default {
    title: 'Example/Molecules/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        
    },
  };
  
  const Template = (args) => <Paragraph {...args}></Paragraph>

  export const Plainparagrafo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plainparagrafo.args = {
    children: <Text label={'labdsdel'}></Text>
    
};