import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CounterButton } from "./CounterButton";

export default {
  title: "Example/CounterButton",
  component: CounterButton,
  argTypes: {
    title: { control: "text" },
    counter: { control: "number" },
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof CounterButton>;

const Template: ComponentStory<typeof CounterButton> = (args) => (
  <CounterButton {...args} />
);

export const Regular = Template.bind({});

export const NoTemplate = () => <CounterButton />;

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: "My title",
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};
