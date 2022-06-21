import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Button, Paragrafo } from '../src/molecules/paragrafo/Paragrafo';


export default {
    title: 'Example/Molecules/Paragrafo',
    component: Paragrafo,

    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Paragrafo {...args}></Paragrafo>;

export const PlainParagrafo = Template.bind({});

PlainParagrafo.args = {
    children: <><Text label={'label'}></Text><Text label={'prova'}></Text></>
    //label: 'Prova',
};

export const Plain2Paragrafo = Template.bind({});
const a = Text({label: "ciaooo"});
Plain2Paragrafo.args = {
    children: a
    //label: 'Prova',
};

