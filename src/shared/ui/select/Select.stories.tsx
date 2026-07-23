import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectDown, type SelectItemOption } from "./Select";

// 검색 필터에 자주 쓰이는 샘플 옵션 데이터
const MOCK_CATEGORIES: SelectItemOption[] = [
  { value: "all", name: "전체 카테고리" },
  { value: "frontend", name: "프론트엔드" },
  { value: "backend", name: "백엔드" },
  { value: "design", name: "디자인", disabled: true }, // 비활성화 옵션 테스트용
];

const MOCK_SORT_OPTIONS: SelectItemOption[] = [
  { value: "latest", name: "최신순" },
  { value: "popular", name: "인기순" },
  { value: "viewCount", name: "조회수순" },
];

const meta: Meta<typeof SelectDown> = {
  title: "UI/SelectDown",
  component: SelectDown,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "선택하기 전 노출되는 기본 문구입니다.",
    },
    selectLabel: {
      control: "text",
      description: "옵션 목록 상단에 노출되는 그룹 라벨입니다.",
    },
    value: {
      control: "text",
      description: "현재 선택된 값 (Controlled)",
    },
    onValueChange: {
      action: "valueChanged",
      description: "옵션 선택 시 호출되는 콜백 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDown>;

// 1. 기본형
export const Default: Story = {
  args: {
    placeholder: "카테고리 선택",
    selectItems: MOCK_CATEGORIES,
  },
};

// 2. 그룹 라벨 포함
export const WithLabel: Story = {
  args: {
    selectLabel: "개발 직군",
    placeholder: "직군 선택",
    selectItems: MOCK_CATEGORIES,
  },
};

// 3. 기본값(defaultValue) 설정
export const WithDefaultValue: Story = {
  args: {
    defaultValue: "frontend",
    selectItems: MOCK_CATEGORIES,
  },
};

// 4. useState 연동 테스트 (인터랙션 확인용)
export const ControlledState: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>("latest");

    return (
      <div className="flex flex-col gap-3">
        <SelectDown
          selectLabel="정렬 기준"
          value={selected ?? undefined}
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

    return (
      <div className="flex items-center gap-2 rounded-lg border p-4 bg-background shadow-sm">
        <span className="text-sm font-semibold text-muted-foreground mr-2">
          검색 필터:
        </span>

        {/* 카테고리 필터 */}
        <SelectDown
          placeholder="카테고리"
          value={category ?? undefined}
          onValueChange={setCategory}
          selectItems={MOCK_CATEGORIES}
        />

        {/* 정렬 필터 */}
        <SelectDown
          placeholder="정렬 기준"
          value={sort ?? undefined}
          onValueChange={setSort}
          selectItems={MOCK_SORT_OPTIONS}
        />
      </div>
    );
  },
};
