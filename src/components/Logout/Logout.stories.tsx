import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logout } from "./Logout";
import { getToken } from "../../actions/Login/login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Logout",
  component: Logout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Logout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logout> = (args) => {
  const [token, setToken] = useState(getToken());
  return <Logout setToken={setToken} />;
};

export const Primary = Template.bind({});
