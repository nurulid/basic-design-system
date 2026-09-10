"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  baseId: string;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(
  undefined,
);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue || "",
  );
  const baseId = React.useId();

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange],
  );

  return (
    <TabsContext.Provider
      value={{ value, onValueChange: handleValueChange, baseId }}
    >
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, id, ...props }, ref) => {
    const { baseId } = useTabs();

    return (
      <div
        ref={ref}
        role="tablist"
        id={id ?? `${baseId}-list`}
        aria-orientation="horizontal"
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-2xl border border-system-border bg-system-soft p-1 text-system-text",
          className,
        )}
        {...props}
      />
    );
  },
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(({ className, value, onClick, onKeyDown, id, disabled, ...props }, ref) => {
  const { value: selectedValue, onValueChange, baseId } = useTabs();
  const isSelected = selectedValue === value;
  const tabId = id ?? `${baseId}-tab-${encodeURIComponent(value)}`;
  const panelId = `${baseId}-panel-${encodeURIComponent(value)}`;

  const moveFocus = (direction: 1 | -1, edge?: "first" | "last") => {
    const tablist = document.activeElement?.closest('[role="tablist"]');
    if (!tablist) return;
    const tabs = Array.from(
      tablist.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not(:disabled)',
      ),
    );
    const currentIndex = tabs.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    if (currentIndex === -1 || tabs.length === 0) return;
    const nextIndex =
      edge === "first"
        ? 0
        : edge === "last"
          ? tabs.length - 1
          : (currentIndex + direction + tabs.length) % tabs.length;
    tabs[nextIndex]?.focus();
  };

  return (
    <button
      ref={ref}
      id={tabId}
      role="tab"
      aria-selected={isSelected}
      aria-controls={panelId}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      data-state={isSelected ? "active" : "inactive"}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented && !disabled) onValueChange(value);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented) return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveFocus(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveFocus(-1);
        } else if (event.key === "Home") {
          event.preventDefault();
          moveFocus(1, "first");
        } else if (event.key === "End") {
          event.preventDefault();
          moveFocus(1, "last");
        }
      }}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3.5 py-1.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-info disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-system-card data-[state=active]:text-system-heading data-[state=active]:shadow-[--shadow-diffuse] data-[state=active]:border data-[state=active]:border-system-border",
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, id, tabIndex = 0, ...props }, ref) => {
    const { value: selectedValue, baseId } = useTabs();
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        id={id ?? `${baseId}-panel-${encodeURIComponent(value)}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${encodeURIComponent(value)}`}
        tabIndex={tabIndex}
        data-state={isSelected ? "active" : "inactive"}
        className={cn(
          "mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-system-info",
          className,
        )}
        {...props}
      />
    );
  },
);
TabsContent.displayName = "TabsContent";
