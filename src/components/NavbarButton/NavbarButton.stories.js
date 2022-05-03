import React from "react";
import NavbarButton from "./NavbarButton";

export default {
  title: "Components/Navbar & Menu/Nav Button",
  component: NavbarButton,
};

const Template = (args) => <NavbarButton {...args} />;
export const Focused = Template.bind({});
Focused.args = {
  text: "YouTube",
  url: "www.youtube.com",
};
export const Unfocused = Template.bind({});
Unfocused.args = {
  text: "Google",
  url: "www.google.com",
};
