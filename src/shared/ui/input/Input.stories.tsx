import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./Input";
import { Button } from "@/shared/ui/button/Button";

const meta: Meta<typeof InputField> = {
  title: "UI/Input",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    errorMessage: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    button: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
  },
};

export const WithError: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
    errorMessage: "8~16자리를 입력해주세요.",
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="mx-auto max-w-sm space-y-4 rounded-xl border p-6 shadow-sm flex gap-2">
      <InputField
        label="아이디"
        type="text"
        placeholder="아이디를 입력하세요"
        errorMessage="8~16자리를 입력해주세요."
        button={
          <Button variant="primary-fill" className="h-10">
            중복확인
          </Button>
        }
      />
    </div>
  ),
};
