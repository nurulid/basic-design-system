import * as React from "react";
import { getFieldClass, getFloatingLabelClass } from "@/lib/ui/fieldStyles";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="relative w-full">
        <textarea
          id={textareaId}
          className={getFieldClass("textarea", !!error, className)}
          ref={ref}
          placeholder={label}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        <label
          htmlFor={textareaId}
          className={getFloatingLabelClass("textarea", !!error)}
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
Textarea.displayName = "Textarea";

export { Textarea };
