import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logout } from "./Logout";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Logout",
  component: Logout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Logout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logout> = (args) => <Logout />;

export const Primary = Template.bind({});
