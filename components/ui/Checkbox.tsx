import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: React.ReactNode;
}

export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(({ className, legend, children, ...props }, ref) => {
  return (
    <fieldset ref={ref} className={cn("space-y-3", className)} {...props}>
      <legend className="text-sm font-medium text-system-heading mb-2">
        {legend}
      </legend>
      <div className="space-y-2">{children}</div>
    </fieldset>
  );
});
CheckboxGroup.displayName = "CheckboxGroup";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const descriptionId = `${checkboxId}-description`;

    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center justify-center h-5 w-4">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            aria-describedby={description ? descriptionId : undefined}
            className={cn(
              "peer h-4 w-4 shrink-0 rounded-[2px] border border-system-border bg-transparent focus:ring-1 focus:ring-system-info focus:ring-offset-2 focus:ring-offset-system-base disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:bg-system-info checked:border-system-info transition-colors",
              className,
            )}
            {...props}
          />
          <Check
            className="absolute h-3 w-3 text-system-base pointer-events-none opacity-0 peer-checked:opacity-100"
            strokeWidth={3}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-system-heading cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p id={descriptionId} className="text-sm text-system-text mt-1">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
