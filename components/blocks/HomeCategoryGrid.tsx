import Link from "next/link";
import { Component, Layout, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/blocks/Card";

const categories = [
  {
    title: "UI Components",
    description:
      "Core interactive primitives that serve as the foundation for building interfaces.",
    href: "/components/ui",
    icon: <Component className="h-5 w-5" />,
    items: ["Button", "Input", "Textarea", "Checkbox", "Radio"],
  },
  {
    title: "Blocks & Sections",
    description:
      "Higher-level composition patterns that combine primitives into reusable layouts.",
    href: "/components/blocks",
    icon: <Layout className="h-5 w-5" />,
    items: ["Card", "Tabs", "Sidebar"],
  },
  {
    title: "AI Components",
    description:
      "Interface patterns purpose-built for AI-driven interactions and chat experiences. This section is growing.",
    href: "/components/ai",
    icon: <Sparkles className="h-5 w-5" />,
    items: ["AI Chat"],
  },
];

export function HomeCategoryGrid() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-system-heading sm:text-3xl">
          Component categories
        </h2>
        <p className="text-system-text max-w-2xl">
          Explore the library by category. Each section includes documented
          components with live previews, usage examples, and API references.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group block"
          >
            <Card className="h-full transition-colors group-hover:border-system-info/40">
              <CardHeader>
                <span className="text-system-heading" aria-hidden="true">
                  {category.icon}
                </span>
                <CardTitle className="flex items-center gap-2 pt-1">
                  {category.title}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
                <ul className="pt-2 space-y-0.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-system-comment font-mono"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
