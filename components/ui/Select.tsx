"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | undefined>(
  undefined,
);

export function Select({
  value,
  defaultValue,
  onValueChange,
  children,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const containerRef = React.useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
      }}
    >
      <div ref={containerRef} className="relative w-full">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(SelectContext)!;
  return (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-controls="select-content"
      aria-expanded={open}
      aria-haspopup="listbox"
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-sm border border-system-border bg-system-card px-3 py-2 text-sm text-system-heading placeholder:text-system-text focus:outline-none focus:ring-1 focus:ring-system-info disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 text-system-text" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = React.useContext(SelectContext)!;
  return <span className="truncate">{value || placeholder}</span>;
};

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(SelectContext)!;

  if (!open) return null;

  return (
    <div
      ref={ref}
      id="select-content"
      role="listbox"
      className={cn(
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-sm border border-system-border bg-system-card py-1 text-base shadow-lg focus:outline-none sm:text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { value: selectedValue, onValueChange } =
    React.useContext(SelectContext)!;
  const isSelected = selectedValue === value;

  return (
    <div
      ref={ref}
      role="option"
      aria-selected={isSelected}
      onClick={() => onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-system-text outline-none hover:bg-system-soft hover:text-system-heading focus:bg-system-soft focus:text-system-heading data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4 text-system-info" />}
      </span>
      <span className="truncate">{children}</span>
    </div>
  );
});
SelectItem.displayName = "SelectItem";
