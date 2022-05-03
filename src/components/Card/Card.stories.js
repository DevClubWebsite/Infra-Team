import Card from "./Card";
import Theme from "../../Theme/Theme";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 12.222,
  height: 14.222,
  color: Theme.background.yellow,
  border: Theme.background.light,
};
