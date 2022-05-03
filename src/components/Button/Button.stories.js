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
  as: "regular",
  background: Theme.background.yellow,
  color: "black",
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!"
};
export const Outlined = Template.bind({});
Outlined.args = {
  as: "outlined",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!"
};
export const Text = Template.bind({});
Text.args = {
  as: "text",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2,
  children: "click me!"
};
