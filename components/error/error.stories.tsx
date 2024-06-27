import type { Meta, StoryObj } from "@storybook/react";
import Error from "./index";

const meta = {
  title: "Design System/Error",
  component: Error,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 404,
    message: "Block not found",
  },
};
