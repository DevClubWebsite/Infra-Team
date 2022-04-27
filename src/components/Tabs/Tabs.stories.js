import Tabs from "./Tabs";

export default {
    title: 'Components/Tabs',
    component: Tabs
};

const Template = args => <Tabs {...args} />

export const Primary = Template.bind({});
Primary.storyName = 'Tabs - not ready';
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
    space: true
};