import React from "react";
import ButtonCTA from "./ButtonCTA";

export default {
  title: "Button/CTA",
  component: ButtonCTA,
  argTypes: {
    size: {
      options: ["reg", "mobile"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <ButtonCTA {...args} />;
export const Regular = Template.bind({});
Regular.args = {
  label: "click me!",
  size: "reg",
};
export const Mobile = Template.bind({});
Mobile.args = {
  label: "click me!",
  size: "mobile",
};
