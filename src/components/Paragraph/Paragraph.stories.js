import React from "react";
import Paragraph from "./Paragraph";
import Theme from "../../Theme/Theme";

export default {
    title: "Text/Paragraph",
    component: Paragraph
}

const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Lorem ipsum lorem ipsum",
    size: "40",
    colour: Theme.colours.blue.primary
}