import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Login } from "./Login";
import { getToken } from "../../actions/Login/login";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => {
  const [token, setToken] = useState(getToken());

  return <Login setToken={setToken} />;
};

export const Primary = Template.bind({});
