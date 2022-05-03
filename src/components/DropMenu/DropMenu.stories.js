import React from "react";
import Theme from "../../Theme/Theme";
import DropMenu from "./DropMenu";
export default {
  title: "Components/Navbar & Menu",
  component: DropMenu,
};

const Template = (args) => <DropMenu {...args} />;
export const Menu = Template.bind({});
Menu.args = {
  title: "Title",
  items: [
    { text: "Home", url: "#" },
    { text: "About Us", url: "#" },
    { text: "Managers", url: "#" },
    { text: "Mentors", url: "#" },
    { text: "Participants", url: "#" },
  ],
  width: 15,
  height: 3,
  hover: Theme.background.yellow,
  background: Theme.background.dark,
  color: Theme.typography.white,
};
