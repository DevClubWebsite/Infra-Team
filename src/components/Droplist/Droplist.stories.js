import React from "react";
import Droplist from "./Droplist";
import Theme from "../../Theme/Theme";

export default {
  title: "Button/Dropdown List",
  component: Droplist,
};

const Template = (args) => <Droplist {...args} />;
export const Dropdown = Template.bind({});
Dropdown.args = {
  title: "title",
  items: [
    {
      label: "1st option",
      disabled: false,
    },
    {
      label: "2nd option",
      disabled: false,
    },
    {
      label: "disabled",
      disabled: true,
    },
  ],
  color: Theme.typography.white,
  background: Theme.background.dark,
  width: 8,
  height: 2,
};
