import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectDown, type SelectItemOption } from "./Select";

// 검색 필터에 자주 쓰이는 샘플 옵션 데이터
const MOCK_CATEGORIES: SelectItemOption[] = [
  { value: "all", label: "전체 카테고리" },
  { value: "frontend", label: "프론트엔드" },
  { value: "backend", label: "백엔드" },
  { value: "design", label: "디자인", disabled: true }, // 비활성화 옵션 테스트용
];

const MOCK_SORT_OPTIONS: SelectItemOption[] = [
  { value: "latest", label: "최신순" },
  { value: "popular", label: "인기순" },
  { value: "viewCount", label: "조회수순" },
];

const meta: Meta<typeof SelectDown> = {
  title: "UI/SelectDown",
  component: SelectDown,
  tags: ["autodocs"],
  argTypes: {
    labelText: {
      control: "text",
      description: "select의 제목(라벨) ex)카테고리, 정렬값, 시간 등",
    },
    value: {
      control: "text",
      description: "현재 선택한 값으로, 유저가 자유롭게 변경하는 값입니다.",
    },
    defaultValue: {
      control: "text",
      description: "기본 선택 값으로, 진입 시 자동으로 선택되어있는 값입니다.",
    },
    onValueChange: {
      action: "valueChanged",
      description: "옵션 선택 시 호출되는 콜백 함수입니다.",
    },
    placeholder: {
      control: "text",
      description: "선택하기 전 노출되는 기본 문구입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDown>;

export const Default: Story = {
  args: {
    placeholder: "카테고리 선택",
    selectItems: MOCK_CATEGORIES,
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "frontend",
    selectItems: MOCK_CATEGORIES,
  },
};

export const ControlledState: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | null>("latest");
    const selectedLabel = MOCK_SORT_OPTIONS.find(
      (options) => options.value === selected,
    )?.label;

    return (
      <div className="flex flex-col gap-3">
        <SelectDown
          {...args}
          selectedLabel={selectedLabel}
          value={selectedLabel ?? undefined}
          onValueChange={(val) => setSelected(val)}
          selectItems={MOCK_SORT_OPTIONS}
        />
        <p className="text-xs text-muted-foreground">
          현재 선택된 값:{" "}
          <code className="font-semibold text-foreground">
            {selected ?? "없음"}
          </code>
        </p>
      </div>
    );
  },
};

// 5. 검색 필터바 형태로 여러 개 조합 (Render 함수 사용)
export const FilterBarComposition: Story = {
  render: () => {
    const [category, setCategory] = useState<string | null>("all");
    const [sort, setSort] = useState<string | null>("latest");
    const categoryLabel = MOCK_CATEGORIES.find(
      (options) => options.value === category,
    )?.label;
    const sortLabel = MOCK_SORT_OPTIONS.find(
      (options) => options.value === sort,
    )?.label;

    return (
      <div className="flex items-center gap-2 rounded-lg border p-4 bg-background shadow-sm">
        {/* 카테고리 필터 */}
        <SelectDown
          placeholder="카테고리"
          value={categoryLabel ?? undefined}
          onValueChange={setCategory}
          selectItems={MOCK_CATEGORIES}
        />

        {/* 정렬 필터 */}
        <SelectDown
          placeholder="정렬 기준"
          value={sortLabel ?? undefined}
          onValueChange={setSort}
          selectItems={MOCK_SORT_OPTIONS}
        />
      </div>
    );
  },
};
