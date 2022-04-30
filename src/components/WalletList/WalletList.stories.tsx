import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WalletList } from "./WalletList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/WalletList",
  component: WalletList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WalletList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WalletList> = (args) => {
  return <WalletList />;
};

export const Primary = Template.bind({});
