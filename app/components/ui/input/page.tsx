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
import { inputUsage } from "@/components/examples/UsageCodesUI";
import { Input } from "@/components/ui/Input";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

const propsRows: DocsPropsRow[] = [
  {
    name: "label",
    type: "string",
    description: "Visible floating label and default placeholder text.",
  },
  {
    name: "error",
    type: "string",
    description: "Shows validation message and error styles when provided.",
  },
  {
    name: "type",
    type: "string",
    description: "Native input type such as text, email, password, and number.",
  },
  {
    name: "...props",
    type: "React.InputHTMLAttributes<HTMLInputElement>",
    description: "Supports native input attributes like required, disabled, and autoComplete.",
  },
];

const relatedComponents = ["Textarea", "Select", "Checkbox"];

export default function InputPage() {
  return (
    <DocsPage
      title="Input"
      description="Inputs collect structured user information for forms and inline editing. Use clear labels and validation hints to reduce user errors."
    >
      <section id="preview" className="space-y-4">
        <ComponentShowcase
          name="Input"
          componentName="Input"
          usageCode={inputUsage}
        >
          <DocsPreviewCanvas>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Input
                label="Email address"
                type="email"
                placeholder="name@example.com"
              />
              <Input
                label="Password"
                type="password"
                defaultValue="123"
                error="Password must be at least 8 characters."
              />
            </div>
          </DocsPreviewCanvas>
        </ComponentShowcase>
      </section>

      <section id="guidelines" className="space-y-4">
        <DocsGuidelinesGrid>
          <DocsFactCard icon={<CheckCircle2 className="h-5 w-5" />} title="Features">
            <ul className="space-y-2">
              <li>Floating labels for compact, readable form layouts.</li>
              <li>Built-in error messaging and invalid state styling.</li>
              <li>Supports native attributes for validation and behavior.</li>
              <li>Consistent with design-system spacing and type scale.</li>
            </ul>
          </DocsFactCard>

          <DocsFactCard icon={<Lightbulb className="h-5 w-5" />} title="When to use">
            Use inputs for short, single-line data such as names, emails, passwords,
            IDs, and concise search/filter controls.
          </DocsFactCard>

          <DocsFactCard icon={<ShieldCheck className="h-5 w-5" />} title="Accessibility">
            Keep labels meaningful, associate error text with fields, and avoid using
            placeholder-only instructions for critical form guidance.
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
