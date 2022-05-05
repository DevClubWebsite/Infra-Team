import DisclosureStory from "./Disclosure";
import Theme from "../../Theme/Theme";

export default {
  title: "Components/Buttons/Disclosure",
  component: DisclosureStory,
};

const Template = (args) => <DisclosureStory {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disclosures: [
        { text: "What is your refund policy?", content: "If you're unhappy with your purchase for any reason, email uswithin 90 days and we'll refund you in full, no questions asked." },
        { text: "What is your refund policy?", content: "If you're unhappy with your purchase for any reason, email uswithin 90 days and we'll refund you in full, no questions asked." }
    ],
    width: 30,
    background: Theme.background.light,
    backgroundButton: Theme.background.yellow,
    color: Theme.typography.white,
    border: Theme.background.dark
};
