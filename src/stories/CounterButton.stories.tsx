import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CounterButton } from "./CounterButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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

export const Primary = Template.bind({});
Primary.args = {};
