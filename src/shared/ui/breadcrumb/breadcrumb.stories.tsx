import type { Meta, StoryObj } from "@storybook/react";
import { DynamicBreadcrumb } from "./breadcrumb";
import { House } from "lucide-react";

const meta: Meta<typeof DynamicBreadcrumb> = {
  title: "UI/Breadcrumb",
  component: DynamicBreadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DynamicBreadcrumb>;

export const Default: Story = {
  args: {
    items: [
      {
        label: <House size={16}></House>,
        href: "#",
      },
      {
        label: "마이페이지",
      },
    ],
  },
};

export const Depth: Story = {
  args: {
    items: [
      {
        label: (
          <span className="flex items-center gap-1">
            <House size={16} /> 홈
          </span>
        ),
        href: "/",
      },
      { label: "메뉴1", href: "/components" },
      { label: "메뉴2" },
    ],
  },
};
