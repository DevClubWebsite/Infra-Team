import DialogComponent from "./Dialog";

export default {
    title: "Dialog/Dialog",
    component: DialogComponent
}

const Template = (args) => <DialogComponent {...args} />;
export const Primary = Template.bind({});