import Link from "next/link";
import { Card } from "@/components/patterns/Card";
import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const tokens = [
  { name: "system-base", swatch: "bg-system-base border border-system-border" },
  { name: "system-card", swatch: "bg-system-card border border-system-border" },
  { name: "system-border", swatch: "bg-system-border" },
  { name: "system-heading", swatch: "bg-system-heading" },
  { name: "system-text", swatch: "bg-system-text" },
  { name: "system-error", swatch: "bg-system-error" },
  { name: "system-success", swatch: "bg-system-success" },
  { name: "system-info", swatch: "bg-system-info" },
  { name: "system-warning", swatch: "bg-system-warning" },
];

export function HomeHero() {
  return (
    <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-system-heading sm:text-5xl lg:text-6xl">
          Basic Design System
        </h1>
        <p className="text-lg leading-8 text-system-text max-w-xl">
          A semantic, docs-driven component library built with reusable design
          tokens and practical UI primitives. Explore documented components,
          preview live examples, and learn how the system fits together.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/components/ui"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            Browse components
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/components/blocks"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            View blocks
          </Link>
        </div>
        <p className="text-sm text-system-comment pt-2">
          Next.js 16 &middot; React 19 &middot; TypeScript &middot; Tailwind CSS v4
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Card className="w-full max-w-md p-6 space-y-5">
          <h3 className="text-lg font-semibold text-system-heading">
            Design tokens at a glance
          </h3>

          <div className="flex flex-wrap gap-2">
            {tokens.map((token) => (
              <span
                key={token.name}
                className="inline-flex items-center gap-1.5 text-xs text-system-text"
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full ${token.swatch}`}
                  aria-hidden="true"
                />
                {token.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-xl bg-system-soft p-3 text-center">
              <p className="text-2xl font-semibold text-system-heading">5</p>
              <p className="text-xs text-system-text">UI components</p>
            </div>
            <div className="rounded-xl bg-system-soft p-3 text-center">
              <p className="text-2xl font-semibold text-system-heading">3</p>
              <p className="text-xs text-system-text">Categories</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
