import Card from "./Card";
import Theme from "../../Theme/Theme";

export default {
    title: "Card/Card",
    component: Card
}

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: 465,
    height: 300,
    color: "#F6C927"
}