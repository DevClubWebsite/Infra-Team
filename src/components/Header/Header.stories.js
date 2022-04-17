import React from "react";
import Header from "./Header";
import Theme from "../../Theme/Theme"

export default {
    title: "Text/Header",
    component: Header
}

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Hello World",
    size: "40",
    colour: Theme.colours.blue.off
}