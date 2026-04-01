"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Components", href: "/components" },
  { label: "Design Tokens", href: "/design-tokens" },
  { label: "Guidelines", href: "/guidelines" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-system-border/80 bg-system-base/85 backdrop-blur-md">
      <div className="container mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold tracking-tight text-system-heading">
          System Logic
        </span>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-system-heading"
                    : "text-system-text hover:text-system-heading",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full transition-all",
                    isActive
                      ? "scale-100 bg-system-info"
                      : "scale-0 bg-transparent",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-system-border bg-system-base px-4 py-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-system-soft text-system-heading"
                      : "text-system-text hover:text-system-heading",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
