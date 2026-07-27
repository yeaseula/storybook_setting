import type { Meta, StoryObj } from "@storybook/react";
import { InputOTPPattern } from "./input-otp";

const meta: Meta<typeof InputOTPPattern> = {
  title: "UI/InputOTPPattern",
  component: InputOTPPattern,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputOTPPattern>;

export const PrimaryFill: Story = {
  args: {},
};
