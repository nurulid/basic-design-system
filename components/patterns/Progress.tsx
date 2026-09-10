"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva("relative overflow-hidden", {
  variants: {
    variant: {
      linear: "h-2 w-full rounded-[2px] bg-system-soft",
      circular: "inline-flex items-center justify-center",
    },
    color: {
      primary: "text-system-info",
      success: "text-system-success",
      warning: "text-system-warning",
      error: "text-system-error",
    },
  },
  defaultVariants: {
    variant: "linear",
    color: "primary",
  },
});

export interface ProgressProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  size?: number; // For circular variant
  strokeWidth?: number; // For circular variant
  indeterminate?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      variant = "linear",
      color = "primary",
      value,
      max = 100,
      size = 40,
      strokeWidth = 4,
      indeterminate,
      ...props
    },
    ref,
  ) => {
    const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
    const safeSize = Number.isFinite(size) && size > 0 ? size : 40;
    const safeStrokeWidth = Math.min(
      Number.isFinite(strokeWidth) && strokeWidth > 0 ? strokeWidth : 4,
      safeSize,
    );
    const safeValue =
      value !== undefined && Number.isFinite(value)
        ? Math.min(Math.max(value, 0), safeMax)
        : undefined;
    const percentage =
      safeValue !== undefined
        ? Math.round((safeValue / safeMax) * 100)
        : undefined;
    const isIndeterminate = indeterminate || safeValue === undefined;

    if (variant === "circular") {
      const radius = (safeSize - safeStrokeWidth) / 2;
      const circumference = radius * 2 * Math.PI;
      const offset = isIndeterminate
        ? circumference * 0.25
        : circumference - (percentage! / 100) * circumference;

      return (
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={safeMax}
          aria-valuenow={isIndeterminate ? undefined : safeValue}
          className={cn(progressVariants({ variant, color }), className)}
          style={{ width: safeSize, height: safeSize }}
          {...props}
        >
          <svg
            className={cn(
              "transform -rotate-90",
              isIndeterminate && "animate-spin",
            )}
            width={safeSize}
            height={safeSize}
            viewBox={`0 0 ${safeSize} ${safeSize}`}
          >
            <circle
              className="text-system-soft"
              strokeWidth={safeStrokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={safeSize / 2}
              cy={safeSize / 2}
            />
            <circle
              className={cn(
                "transition-all duration-300 ease-in-out",
                color === "primary" && "text-system-info",
                color === "success" && "text-system-success",
                color === "warning" && "text-system-warning",
                color === "error" && "text-system-error",
              )}
              strokeWidth={safeStrokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={safeSize / 2}
              cy={safeSize / 2}
            />
          </svg>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        className={cn(progressVariants({ variant, color }), className)}
        {...props}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out",
            color === "primary" && "bg-system-info",
            color === "success" && "bg-system-success",
            color === "warning" && "bg-system-warning",
            color === "error" && "bg-system-error",
            isIndeterminate ? "w-1/2 animate-progress-indeterminate" : "w-full",
          )}
          style={
            isIndeterminate
              ? undefined
              : { transform: `translateX(-${100 - percentage!}%)` }
          }
        />
      </div>
    );
  },
);
Progress.displayName = "Progress";

export { Progress, progressVariants };
