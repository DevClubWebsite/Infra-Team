import React from "react";
import DropdownList from "./DropdownList";
export default {
  title: "Button/Dropdown List",
  component: DropdownList,
};

const Template = (args) => <DropdownList {...args} />;
export const DDL = Template.bind({});
DDL.args = {
  title: "Title",
  items: [
    {
      label: "Item 1",
      variant: "p",
      color: "white",
      weight: 400,
    },
    {
      label: "Item 2",
      variant: "p",
      color: "yellow",
      weight: 400,
    },
  ],
  width: 15,
  height: 3,
};
