import Theme from "../../Theme/Theme";
import Tabs from "./Tabs";

export default {
    title: 'Components/Tabs',
    component: Tabs
};

const Template = args => <Tabs {...args} />

export const Primary = Template.bind({});
Primary.storyName = 'Tabs';
Primary.args = {
    tabs: [
        {label: 'Tab 1', content: 'Content 1'},
        {label: 'Tab 2', content: 'Content 2'},
        {label: 'Tab 3', content: 'Content 3'}
    ],
    width: 10,
    height: 6,
    gap: 1,
    direction: 'row',
    space: true,
    background: Theme.background.light,
    selectedbackground: Theme.background.yellow,
    border: 'none',
    selectedcolor: Theme.typography.darker,
    color: Theme.typography.white
};