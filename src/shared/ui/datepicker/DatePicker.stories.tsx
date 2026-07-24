import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "라벨 텍스트, 디자인에 따라 생략 가능합니다.",
    },
    placeholder: {
      control: "text",
      description: "placeholder, 생략 시 [Pick a date] 자동 노출",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const DatePickerDefault: Story = {
  args: {
    label: "날짜",
    placeholder: "날짜 선택",
  },
};

export const DatePickerNoLabel: Story = {
  args: {
    placeholder: "날짜를 선택해주세요",
  },
};

export const DatePickerNoPlaceholder: Story = {
  args: {},
};
