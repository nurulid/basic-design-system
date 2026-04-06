import type { UiComponentDoc } from "@/lib/ui-docs/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Input } from "@/components/ui/Input";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const inputDoc: UiComponentDoc = {
  title: "Input",
  description:
    "Inputs collect structured user information for forms and inline editing. Use clear labels and validation hints to reduce user errors.",
  showcase: {
    name: "Input",
    componentName: "Input",
    usageCode: UsageCodesUI.inputUsage,
    preview: (
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
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2">
          <li>Floating labels for compact, readable form layouts.</li>
          <li>Built-in error messaging and invalid state styling.</li>
          <li>Supports native attributes for validation and behavior.</li>
          <li>Consistent with design-system spacing and type scale.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use inputs for short, single-line data such as names, emails, passwords, IDs, and concise search/filter controls.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Keep labels meaningful, associate error text with fields, and avoid using placeholder-only instructions for critical form guidance.",
    },
  ],
  propsRows: [
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
      description:
        "Supports native input attributes like required, disabled, and autoComplete.",
    },
  ],
  relatedComponents: ["Textarea", "Select", "Checkbox"],
};
