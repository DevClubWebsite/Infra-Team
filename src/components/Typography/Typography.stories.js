import Typography from "./Typography";

export default {
    title: "Text/text",
    component: Typography
}

const Template = (args) => <Typography {...args} />;
export const Text = Template.bind({});

Text.args = {
    children: "Topography is the study of the forms and features of land surfaces. ",
    as: "h1",
    color: "black",
    weight: 400
}