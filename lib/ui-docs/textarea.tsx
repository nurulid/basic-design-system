import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const textareaDoc: UiComponentDoc = {
  title: "Textarea",
  description:
    "Textareas collect longer, multi-line responses for messages, notes, descriptions, and feedback. Use them when users need more room than a single-line input provides.",
  showcase: {
    name: "Textarea",
    componentName: "Textarea",
    usageCode: UsageCodesUI.textareaUsage,
    preview: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Textarea label="Message" placeholder="Type your message here..." />
          <Textarea
            label="Bio"
            error="Bio is too long."
            defaultValue="This is a very long bio that exceeds the maximum character limit..."
          />
        </div>
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
          <li>Supports native textarea behavior including manual resize.</li>
          <li>Consistent spacing, typography, and semantic token usage.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use Textarea for longer, multi-line content such as comments, messages, bios, notes, and descriptions where a single-line input would feel cramped.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Keep labels meaningful, associate error text with fields, preserve visible keyboard focus, ensure resize does not hide content, and avoid using placeholder-only instructions for critical guidance.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Clear Labels",
        description:
          "Write labels like 'Your message' or 'Project description' so users understand the kind of response expected.",
      },
      {
        title: "Keep Validation Close",
        description:
          "Show validation guidance and errors directly beneath the field so people can correct issues without scanning the page.",
      },
      {
        title: "Choose Textarea for Longer Content",
        description:
          "Use Textarea when users need room for full sentences, notes, or explanations instead of squeezing them into a single line.",
      },
      {
        title: "Provide Enough Visible Height",
        description:
          "Size the field to show enough lines for the expected amount of content so users can review what they have written.",
      },
    ],
    donts: [
      {
        title: "Use Vague Labels",
        description:
          "Avoid labels like 'Details' when more specific wording such as 'Shipping instructions' would guide the user better.",
      },
      {
        title: "Rely on Placeholder Text Alone",
        description:
          "Do not place essential instructions only in placeholder text because it disappears once the field has content.",
      },
      {
        title: "Collapse Long Responses Into a Single Line",
        description:
          "Do not force messages, descriptions, or extended responses into a single-line input.",
      },
      {
        title: "Show Premature Errors",
        description:
          "Avoid displaying an error state before the user has had a fair chance to respond unless the flow explicitly requires it.",
      },
      {
        title: "Make the Field Too Small",
        description:
          "Do not size the textarea so tightly that writing or reviewing content becomes difficult.",
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
      name: "id",
      type: "string",
      description: "Optional explicit ID used to connect the textarea, label, and error message.",
    },
    {
      name: "rows",
      type: "number",
      description: "Native textarea sizing control for visible line count when needed.",
    },
    {
      name: "...props",
      type: "React.TextareaHTMLAttributes<HTMLTextAreaElement>",
      description:
        "Supports native textarea attributes like required, disabled, defaultValue, name, and maxLength.",
    },
  ],
  relatedComponents: ["Input", "Select", "Form Field"],
};
