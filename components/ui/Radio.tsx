"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const RadioGroupNameContext = React.createContext<string | undefined>(undefined);

export interface RadioGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: React.ReactNode;
  name?: string;
}

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(({ className, legend, children, name, ...props }, ref) => {
  const generatedName = React.useId();
  const groupName = name ?? generatedName;

  return (
    <RadioGroupNameContext.Provider value={groupName}>
      <fieldset ref={ref} className={cn("space-y-3", className)} {...props}>
        <legend className="text-sm font-medium text-system-heading mb-2">
          {legend}
        </legend>
        <div className="space-y-2">{children}</div>
      </fieldset>
    </RadioGroupNameContext.Provider>
  );
});
RadioGroup.displayName = "RadioGroup";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, id, name, ...props }, ref) => {
    const groupName = React.useContext(RadioGroupNameContext);
    const generatedId = React.useId();
    const radioId = id || generatedId;
    const descriptionId = `${radioId}-description`;
    const radioName = name ?? groupName;

    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center justify-center h-5 w-4">
          <input
            type="radio"
            id={radioId}
            name={radioName}
            ref={ref}
            aria-describedby={description ? descriptionId : undefined}
            className={cn(
              "peer h-4 w-4 shrink-0 rounded-full border border-system-border bg-transparent focus:ring-1 focus:ring-system-info focus:ring-offset-2 focus:ring-offset-system-base disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:border-system-info transition-colors",
              className,
            )}
            {...props}
          />
          <div className="absolute h-2 w-2 rounded-full bg-system-info pointer-events-none opacity-0 peer-checked:opacity-100" />
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={radioId}
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
Radio.displayName = "Radio";
