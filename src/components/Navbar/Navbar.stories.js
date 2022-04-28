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
    { label: "Home", url: "#" },
    { label: "About Us", url: "#" },
    { label: "Managers", url: "#" },
    { label: "Mentors", url: "#" },
    { label: "Participants", url: "#" },
  ],
  direction: "row",
};
