import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps, buttonVariants } from "../button/Button";
import { Dialog } from "./Dialog";

type ButtonVariant = NonNullable<ButtonProps["variant"]>;

const buttonVariantOptions: ButtonVariant[] = [
  "primary-fill",
  "primary-outline",
  "secondary-fill",
  "secondary-outline",
];

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: false,
      description: "다이얼로그를 열기 위한 트리거 요소입니다.",
    },
    title: {
      control: "text",
      description: "다이얼로그의 제목입니다.",
    },
    description: {
      control: "text",
      description: "다이얼로그의 상세 설명입니다.",
    },
    cancelText: {
      control: "text",
      description: "취소/닫기 버튼의 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    cancelVariant: {
      control: "select",
      options: buttonVariantOptions,
      description: "취소/닫기 버튼의 스타일 variant입니다.",
    },
    confirmText: {
      control: "text",
      description: "확인/액션 버튼의 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    confirmVariant: {
      control: "select",
      options: buttonVariantOptions,
      description: "확인/액션 버튼의 스타일 variant입니다.",
    },
    onConfirm: {
      action: "clicked",
      description: "확인 버튼 클릭 시 실행되는 콜백 함수입니다.",
    },
    closeable: {
      control: "boolean",
      description: "우측 상단 닫기(X) 버튼 노출 여부입니다.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    trigger: <Button>다이얼로그 열기</Button>,
    title: "기본 알림",
    cancelText: "확인",
    cancelVariant: "primary-fill",
  },
};

// 설명(description) 포함
export const WithDescription: Story = {
  args: {
    trigger: <Button>다이얼로그 열기</Button>,
    title: "안내 메세지",
    description: "이 작업은 실행 후 취소할 수 없습니다. 계속 진행하시겠습니까?",
    cancelText: "취소",
    cancelVariant: "primary-fill",
  },
};

// 액션 버튼 포함
export const WithConfirmButton: Story = {
  args: {
    trigger: <Button>다이얼로그 열기</Button>,
    title: "변경사항 저장",
    description: (
      <p>
        수정된 내용을 저장하시겠습니까? <br /> 2줄까지 쓸 수 있어요!
        <br /> 3줄도 가능
      </p>
    ),
    cancelText: "취소",
    cancelVariant: "primary-outline",
    confirmText: "저장하기",
    confirmVariant: "secondary-fill",
  },
};

//close 버튼 포함
export const WithFullButton: Story = {
  args: {
    trigger: <Button>다이얼로그 열기</Button>,
    title: "변경사항 저장",
    description: (
      <p>
        수정된 내용을 저장하시겠습니까? <br /> 2줄까지 쓸 수 있어요!
        <br /> 3줄도 가능
      </p>
    ),
    cancelText: "취소",
    cancelVariant: "primary-outline",
    confirmText: "저장하기",
    confirmVariant: "secondary-fill",
    closeable: true,
  },
};
