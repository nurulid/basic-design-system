import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-[4px] border p-4 flex gap-3 shadow-sm items-start transition-all font-mono",
  {
    variants: {
      variant: {
        info: "bg-system-info/10 text-system-info border-system-border border-l-2 border-l-system-info",
        success:
          "bg-system-success/10 text-system-success border-system-border border-l-2 border-l-system-success",
        warning:
          "bg-system-warning/10 text-system-warning border-system-border border-l-2 border-l-system-warning",
        error:
          "bg-system-error/10 text-system-error border-system-border border-l-2 border-l-system-error",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, ...props }, ref) => {
    const Icon = icons[variant || "info"];

    // Use role="alert" for critical errors/warnings, role="status" for non-disruptive info
    const isCritical = variant === "error" || variant === "warning";
    const role = isCritical ? "alert" : "status";
    const ariaLive = isCritical ? "assertive" : "polite";

    return (
      <div
        ref={ref}
        role={role}
        aria-live={ariaLive}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon
          className={cn("h-5 w-5 shrink-0 mt-0.5", {
            "text-system-info": variant === "info",
            "text-system-success": variant === "success",
            "text-system-warning": variant === "warning",
            "text-system-error": variant === "error",
          })}
        />
        <div className="flex flex-col gap-1.5">
          {title && (
            <h5 className="font-mono font-medium leading-none tracking-tight text-system-heading">
              {title}
            </h5>
          )}
          <div className="text-sm opacity-90 leading-relaxed font-mono text-system-text">
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Alert.displayName = "Alert";

export { Alert, alertVariants };
