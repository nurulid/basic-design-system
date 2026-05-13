import { Palette, Blocks, BookOpen, ShieldCheck } from "lucide-react";
import { DocsFactCard, DocsGuidelinesGrid } from "@/components/blocks/DocsPagePrimitives";

const principles = [
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Semantic tokens",
    description:
      "Styling is built around named tokens like system-card, system-border, and system-heading so the visual language stays consistent across every surface.",
  },
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Reusable primitives",
    description:
      "UI building blocks live in components/ui and are designed to compose into larger patterns without one-off overrides.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Docs-first workflow",
    description:
      "Every component is paired with usage examples, live previews, and structured documentation that stays close to the implementation.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Consistent states",
    description:
      "Focus, disabled, error, and status states share patterns and semantic colors so components feel like one system.",
  },
];

export function HomePrinciples() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-system-heading sm:text-3xl">
          Design principles
        </h2>
        <p className="text-system-text max-w-2xl">
          The design system is built around a few core ideas that keep it
          cohesive, maintainable, and easy to use.
        </p>
      </div>
      <DocsGuidelinesGrid>
        {principles.map((p) => (
          <DocsFactCard key={p.title} icon={p.icon} title={p.title}>
            {p.description}
          </DocsFactCard>
        ))}
      </DocsGuidelinesGrid>
    </section>
  );
}
