import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Tooltip } from "@/components/blocks/Tooltip";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const tooltipDoc: UiComponentDoc = {
  title: "Tooltip",
  description:
    "Tooltips provide brief contextual help for unfamiliar controls, icons, or terms without taking up permanent space in the interface.",
  showcase: {
    name: "Tooltip",
    componentName: "Tooltip",
    usageCode: UsageCodesBlock.tooltipUsage,
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-6 py-8">
        <Tooltip content="Save your current changes">
          <Button>Save</Button>
        </Tooltip>
        <Tooltip content="Share this project" side="right">
          <Button variant="secondary">Share</Button>
        </Tooltip>
        <Tooltip
          content="This action cannot be undone"
          side="bottom"
          className="border-system-error text-system-error"
        >
          <Button variant="destructive">Delete</Button>
        </Tooltip>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Opens on pointer hover and keyboard focus.</li>
          <li>Configurable top, right, bottom, or left placement.</li>
          <li>Delayed opening with an immediate close and configurable delay.</li>
          <li>Generated IDs and accessible tooltip semantics.</li>
          <li>Theme-aware styling through semantic design-system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use tooltips for brief explanations of unfamiliar icons, controls, or terms. Use visible supporting text or a popover when information is essential, lengthy, interactive, or must remain discoverable.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Every trigger needs its own accessible name, especially icon-only controls. Keyboard users must be able to reveal the tooltip by focusing the trigger. Visible tooltip content uses the tooltip role and is connected with aria-describedby; keep focus indicators, contrast, and critical instructions available outside the tooltip.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Keep Content Concise",
        description:
          "Write short, directly relevant guidance that users can read at a glance.",
      },
      {
        title: "Name the Trigger",
        description:
          "Give icon-only controls a visible label or an accessible name in addition to their tooltip.",
      },
      {
        title: "Choose Clear Placement",
        description:
          "Select a side that does not obscure the trigger or nearby content.",
      },
      {
        title: "Use Timely Feedback",
        description:
          "Use a small opening delay to avoid accidental popups while keeping help easy to discover.",
      },
    ],
    donts: [
      {
        title: "Hide Essential Information",
        description:
          "Do not place required instructions, warnings, or critical status information only in a tooltip.",
      },
      {
        title: "Add Interactive Content",
        description:
          "Do not use a tooltip for links, buttons, forms, or long explanations; use a popover or visible content instead.",
      },
      {
        title: "Attach to Disabled Elements",
        description:
          "Do not attach a tooltip directly to a disabled element that cannot receive focus; provide an appropriate wrapper or explanation.",
      },
      {
        title: "Repeat Visible Labels",
        description:
          "Avoid vague or redundant text that adds no context beyond the trigger's visible label.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "content",
      type: "React.ReactNode",
      description: "Brief contextual content rendered inside the tooltip.",
    },
    {
      name: "children",
      type: "React.ReactElement<React.HTMLAttributes<HTMLElement>>",
      description:
        "The single interactive or focusable trigger element that receives hover, focus, and ARIA behavior.",
    },
    {
      name: "side",
      type: "'top' | 'right' | 'bottom' | 'left'",
      description: "Controls placement relative to the trigger; defaults to top.",
    },
    {
      name: "className",
      type: "string",
      description: "Adds or overrides utility classes on the tooltip content.",
    },
    {
      name: "delayDuration",
      type: "number",
      description:
        "Opening delay in milliseconds; defaults to 200 and supports 0 for immediate opening.",
    },
  ],
  relatedComponents: ["Button", "Icon Button", "Popover"],
};
