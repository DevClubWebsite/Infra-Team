import React from "react";
import Droplist from "./Droplist";
import Theme from "../../Theme/Theme";

export default {
  title: "Components/Buttons/Dropdown List",
  component: Droplist,
};

const Template = (args) => <Droplist {...args} />;
export const Dropdown = Template.bind({});
Dropdown.args = {
  title: "title",
  items: [
    {
      text: "1st option",
    },
    {
      text: "2nd option",
    },
    {
      text: "disabled",
      disabled: true,
    },
  ],
  color: Theme.typography.white,
  background: Theme.background.blue,
  hover: Theme.background.yellow,
  width: 19.5,
  height: 2.3,
};
