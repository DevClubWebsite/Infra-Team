import React from "react";
import DropMenu from "./DropMenu";
export default {
  title: "Button/Menu",
  component: DropMenu,
};

const Template = (args) => <DropMenu {...args} />;
export const Primary = Template.bind({});
Primary.args = {
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
