import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";
import SearchIcon from "@/icons/search";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password"],
      },
    },
    prepend: {},
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter some text",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Search for transactions, blocks, accounts",
    prepend: <SearchIcon size="sm" />,
  },
};
