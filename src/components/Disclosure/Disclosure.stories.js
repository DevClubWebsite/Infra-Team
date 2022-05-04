import DisclosureStory from "./Disclosure";

export default {
  title: "Components/Disclosure",
  component: DisclosureStory,
};

const Template = (args) => <DisclosureStory {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: 16.222,
    height: 2.222
};
