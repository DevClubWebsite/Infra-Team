import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button
};

const Template = args => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Click Here!',
    backgroundColor: '#A37EF2'
}
export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: 'black',
    label: 'Secondary'
}