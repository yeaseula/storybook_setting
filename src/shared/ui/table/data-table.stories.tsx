import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./data-table";
import {
  columns,
  ViewVisitorType,
} from "@/features/view-visitor-analytics/columns";

const mockVisitorData: ViewVisitorType[] = [
  {
    id: "1",
    date: "2026-07-24",
    store: "대전점",
    visitor: 100,
  },
  {
    id: "2",
    date: "2026-07-23",
    store: "신사점",
    visitor: 100,
  },
  {
    id: "3",
    date: "2026-07-22",
    store: "부산점",
    visitor: 100,
  },
];

const meta: Meta<typeof DataTable<ViewVisitorType, unknown>> = {
  title: "Features/ViewVisitorAnalytics",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof DataTable<ViewVisitorType, unknown>>;

export const Default: Story = {
  render: () => {
    return (
      <div className="max-w-250 mt-20 ml-auto mr-auto">
        <DataTable columns={columns} data={mockVisitorData}></DataTable>
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => {
    return (
      <div className="max-w-250 mt-20 ml-auto mr-auto">
        <DataTable columns={columns} data={[]}></DataTable>
      </div>
    );
  },
};
