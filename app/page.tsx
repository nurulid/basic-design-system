import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/Tabs";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <main className="flex-1 min-w-0 space-y-24">
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-system-heading sm:text-5xl">
            Basic Design System
          </h1>
          <p className="text-lg text-system-text max-w-2xl">
            A design system UI library featuring a tiered dark palette, semantic
            glow states, and intentional visual hierarchy.
          </p>
        </section>

        <section id="ui-components" className="space-y-12 scroll-mt-24">
          <ComponentShowcase
            name="Buttons"
            componentName="Button"
            usageCode={UsageCodesUI.buttonUsage}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="success">Success</Button>
              <Button variant="info">Info</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="primary" aria-disabled="true">
                Disabled
              </Button>
            </div>
          </ComponentShowcase>
        </section>
      </main>
    </div>
  );
}
