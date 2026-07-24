import * as React from "react";
import { cn } from "@/lib/utils";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  helperText?: string;
  button?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

export const InputField = ({
  className,
  type,
  label,
  errorMessage,
  helperText,
  button,
  id,
  ref,
  ...props
}: InputProps) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;

  const isError = Boolean(errorMessage);
  const describedBy = isError
    ? errorId
    : helperText
      ? descriptionId
      : undefined;

  return (
    <Field className="flex w-full flex-col">
      {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}

      <div className={cn(button && "flex gap-2")}>
        <div className={cn(button && "flex-1")}>
          <Input
            id={inputId}
            type={type}
            ref={ref}
            aria-invalid={isError}
            aria-describedby={describedBy}
            className={cn(
              isError && "border-destructive focus-visible:ring-destructive",
              className,
            )}
            {...props}
          />

          {/* 에러 메시지 및 헬퍼 텍스트 */}
          {isError ? (
            <p
              id={errorId}
              className="text-xs font-medium text-destructive mt-1"
            >
              {errorMessage}
            </p>
          ) : helperText ? (
            <p
              id={descriptionId}
              className="text-xs text-muted-foreground mt-1"
            >
              {helperText}
            </p>
          ) : null}
        </div>
        {button}
      </div>
    </Field>
  );
};
