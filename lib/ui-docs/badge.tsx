import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Badge } from "@/components/patterns/Badge";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const badgeDoc: UiComponentDoc = {
  title: "Badge",
  description:
    "Badges are compact labels for classifying content, showing status, or presenting short pieces of metadata without implying interaction.",
  showcase: {
    name: "Badge",
    componentName: "Badge",
    usageCode: UsageCodesBlock.badgeUsage,
    preview: (
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Seven semantic visual variants for common status meanings.</li>
          <li>Compact, pill-shaped presentation for short labels.</li>
          <li>Native div attributes and className overrides.</li>
          <li>Theme-aware styling through semantic system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use badges for statuses, categories, tags, counts, and brief metadata that benefits from visual emphasis. Use a Button or Link when the label needs to perform an action, and use an Alert when users need a persistent message or next step.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Write a concise text label that remains meaningful without its color. Do not use a badge as the only way to communicate important information, and do not place interactive behavior on the badge without providing an appropriate interactive element and accessible name.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Clear Labels",
        description:
          "Keep badge text short and specific so users can understand the status or category at a glance.",
      },
      {
        title: "Match the Meaning",
        description:
          "Choose a semantic variant that reflects the label, such as Success for completed work or Warning for attention needed.",
      },
      {
        title: "Keep Status Consistent",
        description:
          "Use the same variant and wording for the same status throughout a product.",
      },
      {
        title: "Provide Context",
        description:
          "Place the badge near the content it describes so its meaning is clear from the surrounding context.",
      },
    ],
    donts: [
      {
        title: "Use Badges as Buttons",
        description:
          "Do not use a badge for an action, navigation, or a control that users need to operate with a keyboard.",
      },
      {
        title: "Rely on Color Alone",
        description:
          "Do not communicate status through color without a readable label or other text equivalent.",
        dangerous: true,
      },
      {
        title: "Write Long Messages",
        description:
          "Do not put sentences, instructions, or detailed explanations inside a compact badge.",
      },
      {
        title: "Overuse Visual Emphasis",
        description:
          "Do not add badges to every piece of metadata or use multiple competing variants without a clear reason.",
      },
      {
        title: "Invent Unsupported Behavior",
        description:
          "Do not expect built-in dismissal, loading, focus, or click behavior from Badge; compose those behaviors with the appropriate component.",
      },
    ],
  },
  propsRows: [
    {
      name: "variant",
      type: "'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'",
      description:
        "Selects the semantic visual style of the badge; defaults to default.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The short label or metadata rendered inside the badge.",
    },
    {
      name: "className",
      type: "string",
      description: "Adds or overrides utility classes on the badge container.",
    },
    {
      name: "...props",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description:
        "Native div attributes such as id, data attributes, aria-* attributes, and event handlers.",
    },
  ],
  relatedComponents: ["Alert", "Avatar", "Button"],
};
