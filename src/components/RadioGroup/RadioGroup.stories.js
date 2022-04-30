import RadioGroup from "./RadioGroup";

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup
};

const Template = args => <RadioGroup {...args} />

const Primary = Template.bind({});
Primary.storyName = 'Radio Group';
Primary.args = {

};