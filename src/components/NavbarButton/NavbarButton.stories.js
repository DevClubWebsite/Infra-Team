import React from "react";
import NavbarButton from "./NavbarButton";

export default {
    title: "Components/NavbarButton",
    component: NavbarButton
}

const Template = args => <NavbarButton {...args} />
export const Focused = Template.bind({});
Focused.args = {
    text: "YouTube",
    url: "www.youtube.com"
}
export const Unfocused = Template.bind({});
Unfocused.args = {
    text: "Google",
    url: "www.google.com"
}