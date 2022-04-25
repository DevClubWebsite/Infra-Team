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
    tabSize: 'medium',
    tabGap: 1,
    tabDirection: 'row'
};