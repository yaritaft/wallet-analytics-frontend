import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Wallet } from "./Wallet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Wallet",
  component: Wallet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Wallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wallet> = (args) => <Wallet />;

export const Primary = Template.bind({});
