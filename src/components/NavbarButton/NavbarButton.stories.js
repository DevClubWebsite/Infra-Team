import React from "react";
import NavbarButton from "./NavbarButton";

export default {
    title: "Components/NavbarButton",
    component: NavbarButton
}

const Template = args => <NavbarButton {...args} />
export const Focused = Template.bind({});
Focused.args = {
    label: "YouTube",
    url: "www.youtube.com",
    focused: true

}
export const Unfocused = Template.bind({});
Unfocused.args = {
    label: "Google",
    url: "www.google.com",
    focused: false
}