import React from "react";
import ButtonCTA from "./ButtonCTA";

export default {
  title: "Button/CTA",
  component: ButtonCTA,
};

const Template = (args) => <ButtonCTA {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  label: "click me!",
  size: "regular",
};
export const Mobile = Template.bind({});
Mobile.args = {
  label: "click me!",
  size: "mobile",
};
