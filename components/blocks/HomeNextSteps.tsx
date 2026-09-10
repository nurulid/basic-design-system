import Link from "next/link";
import { ArrowRight, Puzzle, Layout, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/patterns/Card";

const destinations = [
  {
    title: "UI Components",
    description:
      "Core interactive primitives — Button, Input, Checkbox, Radio, Textarea, and more — each with full documentation.",
    href: "/components/ui",
    icon: <Puzzle className="h-5 w-5" />,
  },
  {
    title: "Blocks & Sections",
    description:
      "Higher-level composition patterns like Card, Tabs, and Sidebar that combine primitives into reusable layouts.",
    href: "/components/blocks",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: "AI Components",
    description:
      "Interface patterns purpose-built for AI-driven interactions and chat experiences.",
    href: "/components/ai",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

export function HomeNextSteps() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-system-heading sm:text-3xl">
          Explore the system
        </h2>
        <p className="text-system-text max-w-2xl">
          Start with one of the documentation pathways below. Each section
          includes live previews, usage code, and API details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {destinations.map((dest) => (
          <Link
            key={dest.href}
            href={dest.href}
            className="group block"
          >
            <Card className="h-full transition-colors group-hover:border-system-info/40">
              <CardHeader>
                <span className="text-system-heading" aria-hidden="true">
                  {dest.icon}
                </span>
                <CardTitle className="flex items-center gap-2 pt-1">
                  {dest.title}
                </CardTitle>
                <CardDescription>{dest.description}</CardDescription>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-system-info pt-2 group-hover:underline">
                  Browse
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
