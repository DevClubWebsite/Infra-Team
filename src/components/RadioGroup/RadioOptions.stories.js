import RadioOptions from "./RadioOptions";

export default {
    title: 'Components/RadioOptions',
    component: RadioOptions
};

const Template = args => <RadioOptions {...args} />

export const Primary = Template.bind({});
Primary.storyName = 'Radio Options';
Primary.args = {

};