import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logout } from "./Logout";
import { getToken } from "../../actions/Login/login";

export default {
  title: "Components/Logout",
  component: Logout,
} as ComponentMeta<typeof Logout>;

const Template: ComponentStory<typeof Logout> = (args) => {
  const [token, setToken] = useState(getToken());
  return <Logout setToken={setToken} />;
};

export const Primary = Template.bind({});
