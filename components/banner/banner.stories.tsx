import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";

const meta: Meta<typeof Banner> = {
  title: "Design System/Banner",
  component: Banner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    title: "Solana Explorer",
    description: "Search for transactions, blocks, accounts",
  },
};

export const WithLink: Story = {
  args: {
    title: "Solana Explorer With Link",
    description: "Search for transactions, blocks, accounts",
    href: "/",
  },
};
