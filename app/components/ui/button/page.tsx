import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import {
  DocsFactCard,
  DocsGuidelinesGrid,
  DocsPage,
  DocsPreviewCanvas,
  DocsPropsApiTable,
  DocsRelatedComponents,
  type DocsPropsRow,
} from "@/components/blocks/DocsPagePrimitives";
import { buttonUsage } from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";
import { Upload, CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

const propsRows: DocsPropsRow[] = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'destructive' | 'ghost'",
    description: "Sets the visual style of the button.",
  },
  {
    name: "size",
    type: "'sm' | 'default' | 'lg'",
    description: "Changes spacing and overall visual weight.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Prevents user interaction when true.",
  },
  {
    name: "aria-disabled",
    type: "boolean",
    description: "Keeps semantic button behavior while showing disabled state.",
  },
];

const relatedComponents = ["Link Button", "Icon Button", "Toggle Button"];

export default function ButtonPage() {
  return (
    <DocsPage
      title="Button"
      description="Buttons allow users to take actions, make choices, and trigger workflows. They represent the primary interaction points in this design system."
    >
      <section id="preview" className="space-y-4">
        <ComponentShowcase
          name="Button"
          componentName="Button"
          usageCode={buttonUsage}
        >
          <DocsPreviewCanvas>
            <div className="flex flex-wrap items-center gap-5">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Button size="sm">SMALL</Button>
              <Button size="default">MEDIUM</Button>
              <Button size="lg">LARGE</Button>
              <Button variant="secondary" className="gap-2">
                <Upload className="h-4 w-4" aria-hidden="true" />
                Upload File
              </Button>
            </div>
          </DocsPreviewCanvas>
        </ComponentShowcase>
      </section>

      <section id="guidelines" className="space-y-4">
        <DocsGuidelinesGrid>
          <DocsFactCard icon={<CheckCircle2 className="h-5 w-5" />} title="Features">
            <ul className="space-y-2">
              <li>Keyboard support with Enter and Space.</li>
              <li>Accessible labels and semantic button roles.</li>
              <li>Visual states for hover, focus, active, and disabled.</li>
              <li>Theme-aware styling through existing system tokens.</li>
            </ul>
          </DocsFactCard>

          <DocsFactCard icon={<Lightbulb className="h-5 w-5" />} title="When to use">
            Use buttons for primary actions, inline confirmations, form submissions,
            and intentional state changes where users expect immediate feedback.
          </DocsFactCard>

          <DocsFactCard icon={<ShieldCheck className="h-5 w-5" />} title="Accessibility">
            Ensure visible focus styles, adequate color contrast, and descriptive text
            labels. Avoid icon-only labels unless an accessible name is provided.
          </DocsFactCard>
        </DocsGuidelinesGrid>
      </section>

      <section id="props-api" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-system-heading">Props API</h2>
        <DocsPropsApiTable rows={propsRows} />
      </section>

      <section id="related" className="space-y-4 border-t border-system-border pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-system-comment">
          Related components
        </h2>
        <DocsRelatedComponents items={relatedComponents} />
      </section>
    </DocsPage>
  );
}
