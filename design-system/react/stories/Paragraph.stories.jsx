import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';

export default {
    title: 'Example/Molecules/Paragraph',
    component: Paragraph,
    
    argTypes: {
    
    },
  };

  const Template = (args) => <Paragraph {...args}></Paragraph>;

  export const PlainParagraph = Template.bind({});

  PlainParagraph.args = {
    children: <><Text label={"label"}></Text><Text label={"prova"}></Text></>,
  };

  export const Plain2Paragraph = Template.bind({});
  const a = Text({label: "ciaoooo"});
  Plain2Paragraph.args ={
    children: a
  };



