import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="relative w-full">
        <input
          type={type}
          id={inputId}
          className={cn(
            "peer h-14 w-full rounded-sm border border-system-border bg-system-card px-3 pb-2 pt-5 text-sm leading-5 text-system-heading shadow-[--shadow-diffuse] transition-[border-color,box-shadow,background-color] duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-sans placeholder:text-transparent hover:border-system-heading/20 focus-visible:outline-none focus-visible:border-system-info focus-visible:ring-2 focus-visible:ring-system-info/20 disabled:cursor-not-allowed disabled:opacity-50 font-sans",
            error &&
              "border-system-error hover:border-system-error focus-visible:border-system-error focus-visible:ring-system-error/20",
            className,
          )}
          ref={ref}
          placeholder={label}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform-gpu text-system-text font-sans will-change-transform transition-[color,transform,top] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-75 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-75 peer-focus:text-system-info",
            error && "text-system-error peer-focus:text-system-error",
          )}
        >
          {label}
        </label>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-xs font-sans text-system-error"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
