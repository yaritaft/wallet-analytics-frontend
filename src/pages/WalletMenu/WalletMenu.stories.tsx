import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WalletMenu } from "./WalletMenu";
import { getToken } from "../../actions/Login/login";

export default {
  title: "Components/WalletMenu",
  component: WalletMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WalletMenu>;

const Template: ComponentStory<typeof WalletMenu> = (args) => {
  const [token, setToken] = useState(getToken());
  return <WalletMenu setToken={setToken} />;
};

export const Primary = Template.bind({});
