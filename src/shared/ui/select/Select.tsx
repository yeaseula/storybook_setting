import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export interface SelectItemOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectDownProps {
  labelText?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  groupLabel?: string;
  selectedLabel?: string | undefined;
  selectItems: SelectItemOption[];
  className?: string; // 외부 스타일 커스텀 지원 (너비 조정 등)
}

export function SelectDown({
  labelText,
  value,
  defaultValue,
  onValueChange,
  placeholder = "선택해 주세요",
  selectItems,
  className,
}: SelectDownProps) {
  console.log(value);

  return (
    <Field>
      {labelText && <FieldLabel>{labelText}</FieldLabel>}
      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectTrigger className={cn("w-full", className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectItems.map((item) => (
              <SelectItem
                className="focus:bg-primary-light-trans"
                key={item.value}
                value={String(item.value)} // Radix UI value 규격에 맞게 string 변환
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
