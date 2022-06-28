import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';
export default {
    title: 'Example/molecules/Paragraph',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
     
    },
  };
  const Template = (args) => <Paragraph {...args} ></Paragraph>;

export const Paragraphprova = Template.bind({});
Paragraphprova.args = {
  label:"siuuuuu",
  testo:<><Text label={'ciao mi chiamo ivan e sto imparando ad usare react'}></Text><Text label={' wow che cosa bella'}></Text></>
  
  
};
