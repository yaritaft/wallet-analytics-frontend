import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WalletList } from "./WalletList";

export default {
  title: "Components/WalletList",
  component: WalletList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WalletList>;

const Template: ComponentStory<typeof WalletList> = (args) => {
  return <WalletList />;
};

export const Primary = Template.bind({});
