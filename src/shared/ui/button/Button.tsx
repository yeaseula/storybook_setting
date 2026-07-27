import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none disabled:pointer-events-none",
  {
    variants: {
      variant: {
        "primary-fill":
          "bg-primary text-white hover:bg-primary-dark disabled:bg-gray-700/30",
        "primary-outline":
          "border border-primary text-primary hover:bg-primary-light-trans disabled:border-gray-700/30 disabled:text-gray-700/30",
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
