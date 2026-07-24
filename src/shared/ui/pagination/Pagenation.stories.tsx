import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppPagination } from "./Pagination";

const meta: Meta<typeof AppPagination> = {
  title: "UI/AppPagination",
  component: AppPagination,
  tags: ["autodocs"],
  argTypes: {
    totalPage: { control: "number", description: "전체 게시글 수" },
    pageSize: { control: "number", description: "한 페이지당 노출 수" },
    pageBlockSize: {
      control: "number",
      description: "한 번에 노출할 페이지 번호 개수",
    },
    onPageChange: { action: "pageChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof AppPagination>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPage: 75,
    pageSize: 10,
    pageBlockSize: 5,
  },
};

export const OnePage: Story = {
  args: {
    currentPage: 1,
    totalPage: 1,
    pageSize: 10,
    pageBlockSize: 5,
  },
};

export const WithMockApiData: Story = {
  render: () => {
    // Mock data
    const MOCK_DATA = Array.from({ length: 80 }, (_, i) => ({
      id: i + 1,
      title: `게시글 제목 #${i + 1}`,
      createdAt: `2026-05-${String((i % 30) + 1).padStart(2, "0")}`,
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // API에서 받은 totalPage 및 데이터 슬라이싱 처리
    const totalPage = MOCK_DATA.length;
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = MOCK_DATA.slice(startIndex, startIndex + pageSize);

    return (
      <div className="flex flex-col gap-4 max-w-xl mx-auto p-4 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-bold text-lg">게시글 목록</h3>
          <span className="text-xs text-muted-foreground">
            총 {totalPage}개 (현재 {currentPage} /{" "}
            {Math.ceil(totalPage / pageSize)} 페이지)
          </span>
        </div>

        {/* 게시글 목록 표시 */}
        <ul className="divide-y min-h-[320px]">
          {currentItems.map((item) => (
            <li key={item.id} className="py-2.5 text-sm flex justify-between">
              <span>{item.title}</span>
              <span className="text-xs text-muted-foreground">
                {item.createdAt}
              </span>
            </li>
          ))}
        </ul>

        {/* 공통 페이지네이션 연동 */}
        <div className="pt-2 border-t">
          <AppPagination
            currentPage={currentPage}
            totalPage={totalPage}
            pageSize={pageSize}
            pageBlockSize={5}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    );
  },
};
