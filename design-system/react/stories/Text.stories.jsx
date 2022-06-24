import React from 'react';

import { Text } from '../src/atoms/text/Text';

export default {
    title: 'Example/atoms/Text',
    component: Text,

    argTypes:{

    },
};
const Template = (args) => <Text {...args}/>;

export const PlainText = Template.bind({});

PlainText.args = {
    label: 'ciao mondo',
};