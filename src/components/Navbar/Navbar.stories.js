import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
};
const Template = (args) => <Navbar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  items: [
    { text: "Home", url: "#" },
    { text: "About Us", url: "#" },
    { text: "Managers", url: "#" },
    { text: "Mentors", url: "#" },
    { text: "Participants", url: "#" },
  ],
  direction: "row",
};
