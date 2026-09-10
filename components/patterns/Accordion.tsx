"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextType = {
  type: "single" | "multiple";
  value: string | string[];
  onValueChange: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined,
);

export interface AccordionProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "defaultValue"
> {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue ?? (type === "single" ? "" : []),
    );
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (itemValue: string) => {
      let newValue: string | string[];
      if (type === "single") {
        newValue = currentValue === itemValue ? "" : itemValue;
      } else {
        const arr = Array.isArray(currentValue) ? currentValue : [];
        newValue = arr.includes(itemValue)
          ? arr.filter((v) => v !== itemValue)
          : [...arr, itemValue];
      }
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <AccordionContext.Provider
        value={{ type, value: currentValue, onValueChange: handleValueChange }}
      >
        <div ref={ref} className={cn("space-y-1", className)} {...props} />
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

const AccordionItemContext = React.createContext<
  { value: string; id: string } | undefined
>(undefined);

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const id = React.useId();
  return (
    <AccordionItemContext.Provider value={{ value, id }}>
      <div
        ref={ref}
        className={cn("border-b border-system-border", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, ...props }, ref) => {
  const { value: contextValue, onValueChange } = useAccordionContext();
  const { value: itemValue, id } = useAccordionItemContext();

  const isOpen = Array.isArray(contextValue)
    ? contextValue.includes(itemValue)
    : contextValue === itemValue;

  return (
    <h3 className="flex">
      <button
        ref={ref}
        {...props}
        type="button"
        id={`accordion-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            onValueChange(itemValue);
          }
        }}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-system-heading",
          className,
        )}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-system-text transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
    </h3>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { value: contextValue } = useAccordionContext();
  const { value: itemValue, id } = useAccordionItemContext();

  const isOpen = Array.isArray(contextValue)
    ? contextValue.includes(itemValue)
    : contextValue === itemValue;

  return (
    <div
      ref={ref}
      {...props}
      id={`accordion-content-${id}`}
      role="region"
      aria-labelledby={`accordion-trigger-${id}`}
      hidden={!isOpen}
      className={cn(
        "grid transition-all duration-200 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className={cn("overflow-hidden", className)}>
        <div className="pb-4 pt-0 text-sm text-system-text">{children}</div>
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used inside <Accordion>.");
  }
  return context;
}

function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionTrigger and AccordionContent must be used inside <AccordionItem>.",
    );
  }
  return context;
}
