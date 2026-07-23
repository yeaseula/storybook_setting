import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button/Button";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  helperText?: string;
  button?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const isError = Boolean(errorMessage);

    return (
      <div className="flex w-full flex-col">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-3"
          >
            {label}
          </label>
        )}

        <div className={cn(props.button && "flex gap-2")}>
          <div className={cn(props.button && "flex-1")}>
            <input
              id={inputId}
              type={type}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                isError && "border-destructive focus-visible:ring-destructive",
                className,
              )}
              ref={ref}
              aria-invalid={isError}
              {...props}
            />

            {/* 에러 메시지 및 헬퍼 텍스트 */}
            {isError ? (
              <p className="text-xs font-medium text-destructive mt-1">
                {errorMessage}
              </p>
            ) : helperText ? (
              <p className="text-xs text-muted-foreground mt-1">{helperText}</p>
            ) : null}
          </div>
          {props.button}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
