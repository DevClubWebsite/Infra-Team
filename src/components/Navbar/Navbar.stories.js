import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
};
const Template = (args) => <Navbar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
<<<<<<< HEAD
  items: [
    { label: "Home", url: "#" },
    { label: "About Us", url: "#" },
    { label: "Managers", url: "#" },
    { label: "Mentors", url: "#" },
    { label: "Participants", url: "#" },
  ],
  direction: "row",
};
=======
    items: [
        { text: 'Home', url: '#' },
        { text: 'About Us', url: '#' },
        { text: 'Managers', url: '#' },
        { text: 'Mentors', url: '#' },
        { text: 'Participants', url: '#' }
    ],
    direction: "row"

};
>>>>>>> cfdebf517f5a9dcb2bd7d135c397c3b12172419c
