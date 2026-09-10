import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-1 focus:ring-system-border",
  {
    variants: {
      variant: {
        default:
          "border-system-border bg-system-soft text-system-heading hover:bg-system-border",
        secondary:
          "border-transparent bg-system-soft text-system-text hover:bg-system-border",
        destructive:
          "border-system-error/20 bg-system-error/10 text-system-error hover:bg-system-error/20",
        outline: "text-system-text border-system-border",
        success:
          "border-system-success/20 bg-system-success/10 text-system-success hover:bg-system-success/20",
        warning:
          "border-system-warning/20 bg-system-warning/10 text-system-warning hover:bg-system-warning/20",
        info: "border-system-info/20 bg-system-info/10 text-system-info hover:bg-system-info/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
