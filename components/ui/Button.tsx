import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-border disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-system-info text-system-card border border-transparent hover:brightness-110 shadow-[var(--shadow-diffuse)]",
        secondary:
          "bg-system-card text-system-text hover:text-system-heading border border-system-border hover:bg-white shadow-[var(--shadow-diffuse)]",
        ghost:
          "hover:bg-system-soft text-system-text hover:text-system-heading",
        outline:
          "border border-system-border bg-system-card hover:bg-system-soft text-system-text hover:text-system-heading shadow-[var(--shadow-diffuse)]",
        destructive:
          "bg-system-error/10 text-system-error border border-system-error/20 hover:bg-system-error/20 shadow-[var(--shadow-diffuse)]",
        success:
          "bg-system-success/10 text-system-success border border-system-success/20 hover:bg-system-success/20 shadow-[var(--shadow-diffuse)]",
        info: "bg-system-info/10 text-system-info border border-system-info/20 hover:bg-system-info/20 shadow-[var(--shadow-diffuse)]",
        warning:
          "bg-system-warning/10 text-system-warning border border-system-warning/20 hover:bg-system-warning/20 shadow-[var(--shadow-diffuse)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
