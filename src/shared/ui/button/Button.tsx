import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "primary-fill": "bg-emerald-600 text-white hover:bg-emerald-700",
        "primary-outline":
          "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
        "secondary-fill": "bg-violet-600 text-white hover:bg-violet-700",
        "secondary-outline":
          "border border-violet-600 text-violet-600 hover:bg-violet-50",
      },
      size: {
        sm: "py-1 px-2 text-xs",
        md: "py-2 px-4 text-sm",
        lg: "py-3 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary-fill",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
