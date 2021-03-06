import React from "react";
import Button from "./Button";
import Theme from "../../Theme/Theme";

export default {
  title: "Components/Buttons/Simple Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  variant: "regular",
  background: Theme.background.yellow,
  color: "black",
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!",
};
