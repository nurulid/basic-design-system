"use client";

import * as React from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

type DocNavigationItem = {
  label: string;
  href: string;
};

type DocNavigationProps = {
  title?: string;
  items: DocNavigationItem[];
  className?: string;
};

type NormalizedDocNavigationItem = {
  key: string;
  label: string;
  href: string;
  sectionId: string;
};

function normalizeItem(
  item: DocNavigationItem,
  index: number,
): NormalizedDocNavigationItem | null {
  if (!item.href.startsWith("#")) {
    return null;
  }

  return {
    key: item.href || `${item.label}-${index}`,
    label: item.label,
    href: item.href,
    sectionId: item.href.replace("#", ""),
  };
}

export function DocNavigation({
  title = "On this page",
  items,
  className,
}: DocNavigationProps) {
  const normalizedItems = React.useMemo(
    () =>
      items
        .map((item, index) => normalizeItem(item, index))
        .filter((item): item is NormalizedDocNavigationItem => item !== null),
    [items],
  );
  const [activeId, setActiveId] = React.useState(
    normalizedItems[0]?.sectionId ?? "",
  );

  React.useEffect(() => {
    setActiveId(normalizedItems[0]?.sectionId ?? "");
  }, [normalizedItems]);

  React.useEffect(() => {
    if (!normalizedItems.length) {
      return;
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && normalizedItems.some((item) => item.sectionId === hash)) {
        setActiveId(hash);
      }
    };

    handleHashChange();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const nextActiveId = visibleEntries[0].target.id;
        setActiveId((current) =>
          current === nextActiveId ? current : nextActiveId,
        );
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    const sections = normalizedItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [normalizedItems]);

  return (
    <aside
      className={cn(
        "w-full shrink-0 self-start xl:w-36 sticky top-28",
        className,
      )}
    >
      <div className="rounded-3xl p-2 shadow-[--shadow-diffuse] backdrop-blur-sm space-y-2">
        <div className="flex items-center gap-2 text-system-heading">
          <span className="inline-flex p-1 items-center justify-center rounded-2xl">
            <List className="size-3" aria-hidden="true" />
          </span>
          <h2 className="text-sm font-medium tracking-tight">{title}</h2>
        </div>

        <nav aria-label={title} className="">
          <ul className="space-y-.5">
            {normalizedItems.map((item) => {
              const isActive = activeId === item.sectionId;

              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setActiveId(item.sectionId)}
                    className={cn(
                      "block text-xs font-medium leading-7 tracking-tight transition-colors duration-200 border-l border-system-border/80 pl-4",
                      isActive
                        ? "text-system-heading border-system-primary"
                        : "text-system-text/70 hover:text-system-heading",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
