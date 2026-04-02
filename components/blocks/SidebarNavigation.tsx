"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarNavigationItem = {
  label: string;
  id?: string;
  href?: string;
};

type NormalizedSidebarNavigationItem = {
  key: string;
  label: string;
  href: string;
  sectionId?: string;
};

type SidebarNavigationProps = {
  title: string;
  items: SidebarNavigationItem[];
  className?: string;
};

function normalizeItem(item: SidebarNavigationItem, index: number): NormalizedSidebarNavigationItem {
  const href = item.href ?? (item.id ? `#${item.id}` : "#");
  const sectionId = href.startsWith("#") ? href.replace("#", "") : undefined;

  return {
    key: item.id ?? item.href ?? `${item.label}-${index}`,
    label: item.label,
    href,
    sectionId,
  };
}

export function SidebarNavigation({
  title,
  items,
  className,
}: SidebarNavigationProps) {
  const pathname = usePathname();
  const normalizedItems = React.useMemo(
    () => items.map((item, index) => normalizeItem(item, index)),
    [items],
  );
  const hashItems = React.useMemo(
    () => normalizedItems.filter((item) => item.sectionId),
    [normalizedItems],
  );
  const [activeId, setActiveId] = React.useState(hashItems[0]?.sectionId ?? "");

  React.useEffect(() => {
    setActiveId(hashItems[0]?.sectionId ?? "");
  }, [hashItems]);

  React.useEffect(() => {
    if (!hashItems.length) {
      return;
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hashItems.some((item) => item.sectionId === hash)) {
        setActiveId(hash);
      }
    };

    handleHashChange();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) {
          return;
        }

        const nextActiveId = visible[0].target.id;
        setActiveId((current) =>
          current === nextActiveId ? current : nextActiveId,
        );
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    const sections = hashItems
      .map((item) => item.sectionId)
      .filter((sectionId): sectionId is string => Boolean(sectionId))
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hashItems]);

  return (
    <aside className={cn("w-full md:w-64 shrink-0", className)}>
      <div className="sticky top-28 space-y-8">
        <div className="rounded-3xl border border-system-border bg-system-card/85 p-6 shadow-[--shadow-diffuse]">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-system-comment">
            {title}
          </h3>
          <nav className="flex flex-col space-y-1.5" aria-label={`${title} sections`}>
            {normalizedItems.map((item) => {
              const isPathLink = item.href.startsWith("/");
              const isActive = isPathLink
                ? pathname === item.href
                : activeId === item.sectionId;

              const itemClassName = cn(
                "relative flex items-center rounded-xl px-3 py-2 pl-7 text-sm font-medium transition-colors",
                isActive
                  ? "bg-system-soft text-system-heading"
                  : "text-system-text hover:text-system-heading",
              );

              const itemIndicatorClassName = cn(
                "absolute left-3.5 h-2 w-2 rounded-full border border-system-border transition-all",
                isActive
                  ? "scale-100 bg-system-info"
                  : "scale-75 bg-system-card",
              );

              if (isPathLink) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={itemClassName}
                  >
                    <span aria-hidden="true" className={itemIndicatorClassName} />
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    if (item.sectionId) {
                      setActiveId(item.sectionId);
                    }
                  }}
                  className={itemClassName}
                >
                  <span aria-hidden="true" className={itemIndicatorClassName} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
