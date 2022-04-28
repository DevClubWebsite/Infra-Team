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
  items: ["Item 1", "Item 2", "Item 3"],
};
