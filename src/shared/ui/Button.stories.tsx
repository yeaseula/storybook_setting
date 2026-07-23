import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost"],
      description: "버튼의 시각적 스타일을 지정합니다.",
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg", "icon"],
      description: "버튼의 크기를 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부를 설정합니다.",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: "기본 버튼",
    variant: "default",
    size: "default",
  },
};

// Secondary Variant
export const Secondary: Story = {
  args: {
    children: "서브 버튼",
    variant: "secondary",
  },
};

// Destructive Variant
export const Destructive: Story = {
  args: {
    children: "삭제 버튼",
    variant: "destructive",
  },
};

// Outline Variant
export const Outline: Story = {
  args: {
    children: "테두리 버튼",
    variant: "outline",
  },
};

// 커스텀 클래스 전달 테스트 (cn 함수 동작 확인)
export const CustomStyle: Story = {
  args: {
    children: "커스텀 버튼",
    variant: "default",
    className: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-full",
  },
};
