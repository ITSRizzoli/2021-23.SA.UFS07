import React from 'react';

import { Image } from '../src/atoms/image/Image';

export default {
  title: 'Example/Atoms/Image',
  component: Image,
  argTypes: {
  },
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Image src',
}
