import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WalletMenu } from "./WalletMenu";
import { getToken } from "../../actions/Login/login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/WalletMenu",
  component: WalletMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WalletMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WalletMenu> = (args) => {
  const [token, setToken] = useState(getToken());
  return <WalletMenu setToken={setToken} />;
};

export const Primary = Template.bind({});
