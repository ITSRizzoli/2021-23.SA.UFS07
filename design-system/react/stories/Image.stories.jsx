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
Primary.args = {
  src: 'Image source'
}
