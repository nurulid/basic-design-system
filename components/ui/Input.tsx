import * as React from "react";
import { getFieldClass, getFloatingLabelClass } from "@/lib/ui/fieldStyles";

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
          className={getFieldClass("input", !!error, className)}
          ref={ref}
          placeholder={label}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={getFloatingLabelClass("input", !!error)}
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
