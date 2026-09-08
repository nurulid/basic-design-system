import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Alert } from "@/components/blocks/Alert";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const alertDoc: UiComponentDoc = {
  title: "Alert",
  description:
    "Alerts present contextual information, success, warning, or error feedback that users need to notice in the current page context.",
  showcase: {
    name: "Alert",
    componentName: "Alert",
    usageCode: UsageCodesBlock.alertUsage,
    preview: (
      <div className="w-full space-y-4">
        <Alert title="Workspace saved" variant="success">
          Your changes are now available to your team.
        </Alert>
        <Alert title="Connection issue" variant="warning">
          We could not sync the latest updates. Check your connection and try
          again.
        </Alert>
        <Alert variant="info">Scheduled maintenance starts at 10:00 PM.</Alert>
        <Alert title="Unable to save" variant="error">
          Your changes could not be saved. Review the form and try again.
        </Alert>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Info, success, warning, and error semantic variants.</li>
          <li>Matching icons and system-token color treatments.</li>
          <li>Optional titles with arbitrary message content.</li>
          <li>Forwarded refs, native div attributes, and className overrides.</li>
          <li>Built-in polite or assertive live-region behavior.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use alerts for inline validation summaries, important page-level feedback, completed or failed operations, warnings that affect the next step, and information that should remain visible. Use a Toast for transient feedback or a Modal when users must decide before continuing.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        'Warning and error variants use role="alert" with assertive announcements, while info and success use role="status" with polite announcements. Keep the meaning in the text, not color or the icon alone. Controls placed inside an alert still need their own accessible names and keyboard behavior.',
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Match the Meaning",
        description:
          "Choose the variant that reflects the message's meaning rather than selecting a color for visual preference.",
      },
      {
        title: "Write Actionable Messages",
        description:
          "Start with concise text that explains what happened or what the user should do next.",
      },
      {
        title: "Add Useful Context",
        description:
          "Use title for a short summary and the message content for supporting details.",
      },
      {
        title: "Communicate Beyond Color",
        description:
          "Make the alert understandable through its text even when users cannot distinguish its color or icon.",
      },
    ],
    donts: [
      {
        title: "Replace Interactive Patterns",
        description:
          "Do not use an alert as a substitute for a button, modal, toast, or form control.",
      },
      {
        title: "Misuse Severity",
        description:
          "Do not use warning or error styling for routine success or neutral information.",
      },
      {
        title: "Mix Unrelated Messages",
        description:
          "Do not put unrelated messages into one alert or bury the important explanation in a long block.",
      },
      {
        title: "Rely on Visuals Alone",
        description:
          "Do not rely on the icon or color alone to communicate the alert's meaning.",
        dangerous: true,
      },
      {
        title: "Invent Dismissal Behavior",
        description:
          "Do not imply built-in dismissal or retry behavior; add separately labeled controls only when the composition needs them.",
      },
    ],
  },
  propsRows: [
    {
      name: "variant",
      type: "'info' | 'success' | 'warning' | 'error'",
      description:
        "Selects the semantic style, icon, and live-region behavior; defaults to info.",
    },
    {
      name: "title",
      type: "string",
      description: "Optional short heading rendered above the message.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Alert message content, including text or inline content.",
    },
    {
      name: "className",
      type: "string",
      description: "Adds or overrides utility classes on the alert container.",
    },
    {
      name: "...props",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description:
        "Native div and ARIA attributes such as id, data attributes, and event handlers.",
    },
    {
      name: "ref",
      type: "React.Ref<HTMLDivElement>",
      description: "Forwarded ref to the alert container.",
    },
  ],
  relatedComponents: ["Toast", "Modal", "Card"],
};
