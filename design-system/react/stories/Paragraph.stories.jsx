import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';

export default {
    title: 'Example/Molecules/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      // backgroundColor: { control: 'color' },
    },
  };

  const Template = (args) => <Paragraph {...args}></Paragraph>;
  export const PlainParagraph = Template.bind({});

  PlainParagraph.args = {
    children: <><Text label={'label'}></Text><Text label={'prova'}></Text></>
  };

  export const Plain2Paragraph = Template.bind({});
  const a = Text({label: "ciaooooo"});
  PlainParagraph.args = {
    children: a
  };