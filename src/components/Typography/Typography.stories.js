import Typography from "./Typography";

export default {
  title: "Components/text",
  component: Typography,
  argTypes: {
    variant: {
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Typography {...args} />;
export const Text = Template.bind({});

Text.args = {
  children:
    "Topography is the study of the forms and features of land surfaces. ",
  variant: "h1",
  color: "black",
  weight: 400,
};
