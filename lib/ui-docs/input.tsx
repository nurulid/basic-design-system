import type { UiComponentDoc } from "@/lib/types";
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
        <ul className="space-y-2 list-dot">
          <li>Floating labels for compact, readable form layouts.</li>
          <li>Built-in error messaging and invalid state styling.</li>
          <li>Supports native attributes for validation and behavior.</li>
          <li>Consistent spacing, typography, and semantic token usage.</li>
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
        "Keep labels meaningful, associate error text with fields, preserve visible keyboard focus, and avoid using placeholder-only instructions for critical guidance.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Specific Field Labels",
        description:
          "Write labels like 'Email address' or 'Account number' so users immediately know what format or value is expected.",
      },
      {
        title: "Keep Validation Close",
        description:
          "Show validation guidance and errors directly beneath the field so people can correct issues without scanning the page.",
      },
      {
        title: "Choose the Right Input Type",
        description:
          "Use native types such as 'email', 'password', or 'number' to support better keyboards, autofill, and built-in browser behavior.",
      },
      {
        title: "Use Textarea for Longer Responses",
        description:
          "Keep Input focused on short, single-line values and move comments, notes, or descriptions to Textarea.",
      },
    ],
    donts: [
      {
        title: "Use Vague Labels",
        description:
          "Avoid labels like 'Info' or 'Details' because they force users to guess what should be entered.",
      },
      {
        title: "Rely on Placeholder Text Alone",
        description:
          "Do not place essential instructions only in placeholder text because it disappears once the field has content.",
      },
      {
        title: "Show Premature Errors",
        description:
          "Avoid displaying an error state before the user has had a reasonable chance to interact with the field.",
      },
      {
        title: "Force Long Content Into One Line",
        description:
          "Do not use a single-line input for messages, descriptions, or other extended responses.",
      },
      {
        title: "Hide Validation Rules Elsewhere",
        description:
          "Keep important format rules and constraints near the field instead of burying them in distant helper text.",
      },
    ],
  },
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
      name: "id",
      type: "string",
      description: "Optional explicit ID used to connect the input, label, and error message.",
    },
    {
      name: "...props",
      type: "React.InputHTMLAttributes<HTMLInputElement>",
      description:
        "Supports native input attributes like required, disabled, autoComplete, defaultValue, and name.",
    },
  ],
  relatedComponents: ["Textarea", "Select", "Checkbox"],
};
