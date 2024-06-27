import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";

const meta = {
  title: "Design System/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1 className="text-3xl font-semibold">This is a card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          repellat cum placeat iste recusandae deserunt quae totam quaerat enim,
          dolorum doloribus distinctio officiis dolore mollitia quia? Excepturi,
          tempore praesentium?
        </p>
      </div>
    ),
  },
};
