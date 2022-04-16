import React from "react";
import Navbar from "./Navbar";

export default {
    title: 'Components/Navbar',
    component: Navbar
};
const Template = args => <Navbar {...args} />
export const Header = Template.bind({});
Header.args = {
    items: [
        ['Home', '#'],
        ['About Us', '#'],
        ['Managers', '#'],
        ['Mentors', '#'],
        ['Participants', '#']
    ],
    direction: {
        options: ['row','column']
    }

};