import React from 'react';

import { Card_infos } from '../src/organisms/card_infos/Card_infos';
import { Card_single_info } from '../src/molecules/card_single_info/Card_single_info';
import { Image } from '../src/atoms/image/Image';
import { Card_marca } from '../src/atoms/card_marca/Card_marca';
import ImagePeso from '../src/images/peso.svg';
import ImageTimer from '../src/images/timer.svg';
import ImageQuantità from '../src/images/quantità.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Organisms/Card_infos',
  component: Card_infos,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card_infos {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children:
    <>
    <>
        <Card_single_info> 
            <Image src= {ImagePeso} id={"peso"} />
            <Card_marca text={"250 g"}></Card_marca>
         </Card_single_info>
    </>

    <>
    <Card_single_info> 
        <Image src= {ImageQuantità} id={"quantità"} />
        <Card_marca text={"2"}></Card_marca>
    </Card_single_info>
    </>
    <>
    <Card_single_info> 
        <Image src= {ImageTimer} id={"timer"} />
        <Card_marca text={"25 min."}></Card_marca>
    </Card_single_info>
    </>
    </>
};
