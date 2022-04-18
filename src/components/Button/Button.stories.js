import React from "react";
import Button from "./Button";
import Theme from "../../Theme/Theme";

export default {
  title: "Button/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  variant: "regular",
  background: "whitesmoke",
  color: "black",
  label: "click me!",
  size: "medium",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  background: "none",
  color: Theme.background.yellow,
  label: "click me!",
  size: "medium",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  background: "none",
  color: Theme.background.yellow,
  label: "click me!",
  size: "medium",
};
