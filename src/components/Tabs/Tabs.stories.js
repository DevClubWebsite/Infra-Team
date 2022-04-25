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
        {label: 'x', content: 'x'},
        {label: 'y', content: 'y'}
    ],
    tabSize: 'medium',
    tabGap: 1
};