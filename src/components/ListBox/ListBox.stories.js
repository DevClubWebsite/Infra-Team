import ListBox from "./ListBox";
console.log(typeof ListBox);
export default {
    title: "ListBox/ListBox",
    component: ListBox
}

const Template = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {

}