import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary-fill",
        "primary-outline",
        "secondary-fill",
        "secondary-outline",
      ],
      description: "버튼의 시각적 스타일을 지정합니다.",
      table: {
        defaultValue: { summary: "primary-fill" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "버튼의 크기를 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부를 설정합니다.",
    },
    children: {
      control: "text",
      description: "버튼 내부에 들어갈 텍스트 또는 요소입니다.",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary-fill
export const PrimaryFill: Story = {
  args: {
    children: "기본 버튼",
    variant: "primary-fill",
    size: "md",
  },
};

// Primary outline
export const PrimaryOutline: Story = {
  args: {
    children: "기본 아웃라인",
    variant: "primary-outline",
  },
};

// Secondary-fill
export const SecondaryFill: Story = {
  args: {
    children: "서브 버튼",
    variant: "secondary-fill",
  },
};

// Secondary-outline
export const SecondaryOutline: Story = {
  args: {
    children: "서브 아웃라인",
    variant: "secondary-outline",
  },
};

// 커스텀 클래스 전달 테스트 (cn 함수 동작 확인)
export const CustomStyle: Story = {
  args: {
    children: "커스텀 버튼",
    variant: "primary-fill",
    className: "bg-sky-600 hover:bg-sky-700 text-white rounded-full",
    onClick: () => alert("버튼 클릭!!!!"),
  },
};
