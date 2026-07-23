import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectItemOption {
  value: string;
  name: string;
  disabled?: boolean; // 비활성화 옵션도 미리 확장성을 대비해 추가해 두면 좋습니다.
}

export interface SelectDownProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  selectLabel?: string;
  selectItems: SelectItemOption[];
  className?: string; // 외부 스타일 커스텀 지원 (너비 조정 등)
}

export function SelectDown({
  value,
  defaultValue,
  onValueChange,
  placeholder = "선택해 주세요",
  selectLabel,
  selectItems,
  className,
}: SelectDownProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}

          {selectItems.map((item) => (
            <SelectItem
              key={item.value}
              value={String(item.value)} // Radix UI value 규격에 맞게 string 변환
              disabled={item.disabled}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
