"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  contentId: string;
  activeValue: string;
  setActiveValue: (value: string) => void;
  labels: React.MutableRefObject<Record<string, string>>;
  registerLabel: (value: string, label: string) => void;
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
  const [activeValue, setActiveValue] = React.useState(defaultValue || "");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const labels = React.useRef<Record<string, string>>({});
  const registerLabel = React.useCallback((optionValue: string, label: string) => {
    labels.current[optionValue] = label;
  }, []);
  const contentId = React.useId();

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
    setActiveValue(newValue);
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
        contentId,
        activeValue,
        setActiveValue,
        labels,
        registerLabel,
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
>(({ className, children, onClick, onKeyDown, ...props }, ref) => {
  const context = React.useContext(SelectContext)!;
  const { open, setOpen, contentId, activeValue, setActiveValue, value, onValueChange } = context;

  const moveActive = (direction: 1 | -1, edge?: "start" | "end") => {
    const options = Array.from(
      document.querySelectorAll<HTMLElement>(`#${CSS.escape(contentId)} [role="option"]`),
    ).filter((option) => option.getAttribute("aria-disabled") !== "true");
    if (!options.length) return;
    const currentIndex = options.findIndex(
      (option) => option.dataset.value === (activeValue || value),
    );
    const nextIndex = edge === "start"
      ? 0
      : edge === "end"
        ? options.length - 1
        : (currentIndex + direction + options.length) % options.length;
    setActiveValue(options[nextIndex].dataset.value || "");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) setOpen(true);
      else moveActive(event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (!open) setOpen(true);
      moveActive(event.key === "Home" ? 1 : -1, event.key === "Home" ? "start" : "end");
    } else if (event.key === "Escape") {
      setOpen(false);
    } else if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault();
      if (activeValue) onValueChange(activeValue);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-controls={contentId}
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-activedescendant={open && activeValue ? `${contentId}-${activeValue}` : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setOpen(!open);
      }}
      onKeyDown={handleKeyDown}
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
  const { value, labels } = React.useContext(SelectContext)!;
  return <span className="truncate">{(value && labels.current[value]) || value || placeholder}</span>;
};

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open, contentId } = React.useContext(SelectContext)!;

  if (!open) return null;

  return (
    <div
      ref={ref}
      id={contentId}
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
  React.HTMLAttributes<HTMLDivElement> & { value: string; disabled?: boolean }
>(({ className, children, value, disabled = false, onClick, ...props }, ref) => {
  const { value: selectedValue, onValueChange, contentId, activeValue, setActiveValue, registerLabel } =
    React.useContext(SelectContext)!;
  const isSelected = selectedValue === value;

  registerLabel(value, typeof children === "string" ? children : value);
  const itemId = `${contentId}-${value}`;

  return (
    <div
      ref={ref}
      id={itemId}
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      data-value={value}
      data-highlighted={activeValue === value ? "true" : undefined}
      onMouseEnter={() => !disabled && setActiveValue(value)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented && !disabled) onValueChange(value);
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-system-text outline-none hover:bg-system-soft hover:text-system-heading focus:bg-system-soft focus:text-system-heading aria-selected:bg-system-soft aria-selected:text-system-heading data-[highlighted=true]:bg-system-soft data-[highlighted=true]:text-system-heading aria-disabled:pointer-events-none aria-disabled:opacity-50",
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
