import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Login } from "./Login";
import { getToken } from "../../actions/Login/login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Login",
  component: Login,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Login>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Login> = (args) => {
  const [token, setToken] = useState(getToken());

  return <Login setToken={setToken} />;
};

export const Primary = Template.bind({});
