import React from "react";
import Button from "./Button";
import Theme from "../../Theme/Theme";

export default {
  title: "Button/Button",
  component: Button,
};


// background: PropTypes.string,
//   color: PropTypes.string,
//   variant: PropTypes.oneOf(["regular", "outlined", "text"]),
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired
const Template = (args) => <Button {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  variant: "regular",
  background: Theme.background.yellow,
  color: "black",
  width: 10,
  height: 3,
  padding: 0.2
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  background: "none",
  color: Theme.background.yellow,
  width: 10,
  height: 3,
  padding: 0.2
};
