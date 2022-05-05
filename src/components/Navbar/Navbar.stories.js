import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar & Menu",
  component: Navbar,
};
const Template = (args) => <Navbar {...args} />;
export const Nav = Template.bind({});
Nav.args = {
  items: [
    { text: "Home", url: "#" },
    { text: "About Us", url: "#" },
    { text: "Managers", url: "#" },
    { text: "Mentors", url: "#" },
    { text: "Participants", url: "#" },
  ],
  direction: "row",
};
