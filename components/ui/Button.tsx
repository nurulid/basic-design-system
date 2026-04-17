import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-border disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-system-info text-system-card border border-transparent hover:opacity-80 shadow-[--shadow-diffuse]",
        secondary:
          "bg-system-card text-system-text hover:text-system-heading border border-system-border hover:bg-white shadow-[--shadow-diffuse]",
        ghost:
          "hover:bg-system-soft text-system-text hover:text-system-heading",
        outline:
          "border border-system-border bg-system-card hover:bg-system-soft text-system-text hover:text-system-heading shadow-[--shadow-diffuse]",
        destructive:
          "bg-system-error/10 text-system-error border border-system-error/20 hover:bg-system-error/20 shadow-[--shadow-diffuse]",
        success:
          "bg-system-success/10 text-system-success border border-system-success/20 hover:bg-system-success/20 shadow-[--shadow-diffuse]",
        info: "bg-system-info/10 text-system-info border border-system-info/20 hover:bg-system-info/20 shadow-[--shadow-diffuse]",
        warning:
          "bg-system-warning/10 text-system-warning border border-system-warning/20 hover:bg-system-warning/20 shadow-[--shadow-diffuse]",
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
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
