import React from "react";
import HeaderParagraph from "./HeaderParagraph";
import Theme from "../../Theme/Theme";

export default {
    title: "Text/HeaderParagraph",
    component: HeaderParagraph
}

const Template = (args) => <HeaderParagraph {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    size: 1,
    headerLabel: "Who loves Minecraft?",
    paragraphLabel: "I DO!",
    headerColour: Theme.colours.yellow.primary,
    paragraphColour: Theme.colours.blue.off
}