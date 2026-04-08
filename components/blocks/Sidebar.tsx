"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SidebarProps as SidebarComponentProps } from "@/lib/types";
import { cn } from "@/lib/utils";
export type { SidebarItem, SidebarProps } from "@/lib/types";

export function Sidebar({
  items,
  title = "Workspace",
  defaultCollapsed = false,
  defaultActiveId,
  panelContent,
  onItemSelect,
  className,
  ...props
}: SidebarComponentProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [activeId, setActiveId] = React.useState(
    defaultActiveId ?? items[0]?.id ?? "",
  );

  React.useEffect(() => {
    if (!items.some((item) => item.id === activeId)) {
      setActiveId(defaultActiveId ?? items[0]?.id ?? "");
    }
  }, [activeId, defaultActiveId, items]);

  return (
    <div
      className={cn(
        "flex min-h-[360px] w-full overflow-hidden rounded-3xl border border-system-border bg-system-card shadow-[--shadow-diffuse]",
        className,
      )}
      {...props}
    >
      <aside
        className={cn(
          "flex shrink-0 flex-col border-r border-system-border bg-system-card p-3 transition-[width] duration-300 ease-out",
          isCollapsed ? "w-[4.5rem]" : "w-64",
        )}
      >
        <div className="mb-3 flex items-center justify-between gap-2">
          <p
            className={cn(
              "truncate text-xs font-semibold uppercase tracking-[0.18em] text-system-comment transition-all duration-200",
              isCollapsed
                ? "pointer-events-none w-0 opacity-0"
                : "w-auto opacity-100",
            )}
          >
            {title}
          </p>
          <button
            type="button"
            onClick={() => setIsCollapsed((current) => !current)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-system-border bg-system-soft text-system-heading transition-colors hover:bg-system-base"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav className="space-y-1.5" aria-label={`${title} navigation`}>
          {items.map((item) => {
            const isActive = item.id === activeId;
            const itemClassName = cn(
              "group relative flex w-full items-center rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-info",
              isCollapsed
                ? "justify-center px-2 py-2.5"
                : "justify-start gap-3 px-3 py-2.5",
              isActive
                ? "bg-system-soft text-system-heading"
                : "text-system-text hover:bg-system-soft/70 hover:text-system-heading",
            );

            const handleSelect = () => {
              setActiveId(item.id);
              onItemSelect?.(item);
            };

            const icon = (
              <span className="text-system-heading" aria-hidden="true">
                {item.icon}
              </span>
            );

            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={itemClassName}
                  aria-current={isActive ? "page" : undefined}
                  title={isCollapsed ? item.label : undefined}
                  onClick={handleSelect}
                >
                  {icon}
                  <span
                    className={cn(
                      "truncate text-sm font-medium",
                      isCollapsed && "sr-only",
                    )}
                  >
                    {item.label}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={handleSelect}
                className={itemClassName}
                aria-current={isActive ? "page" : undefined}
                title={isCollapsed ? item.label : undefined}
              >
                {icon}
                <span
                  className={cn(
                    "truncate text-sm font-medium",
                    isCollapsed && "sr-only",
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col bg-system-base/35 p-6">
        {panelContent ?? (
          <div className="rounded-2xl border border-dashed border-system-border bg-system-card p-6">
            <h4 className="text-base font-semibold text-system-heading">
              Sidebar content area
            </h4>
            <p className="mt-2 text-sm text-system-text">
              Select a navigation item to update the active state.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
