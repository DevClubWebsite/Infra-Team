import Typography from "./Typography";

export default {
    title: "Text/text",
    component: Typography
}

const Template = (args) => <Typography {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    label: "Topography is the study of the forms and features of land surfaces. ",
    type: "p",
    color: "black",
    weight: 400
}