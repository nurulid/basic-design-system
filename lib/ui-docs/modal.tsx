import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { ModalDemo } from "@/components/examples/ModalDemo";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const modalDoc: UiComponentDoc = {
  title: "Modal",
  description:
    "Modals focus attention on a short task, confirmation, or decision without leaving the current page.",
  showcase: {
    name: "Modal",
    componentName: "Modal",
    usageCode: UsageCodesBlock.modalUsage,
    preview: <ModalDemo />,
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Controlled visibility through isOpen and onClose.</li>
          <li>Accessible title and description relationships.</li>
          <li>Backdrop, close-button, and Escape-key dismissal.</li>
          <li>Body scroll locking and keyboard focus containment.</li>
          <li>Theme-aware styling through semantic design-system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use modals for confirmations, focused forms, short edits, and consequential decisions that benefit from an explicit response. Use a page, drawer, popover, or inline content for long, navigational, or frequently referenced information.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "The dialog has semantic dialog attributes and references its rendered title and description. Keyboard users can reach the dialog and its controls, Escape dismisses it, focus stays within the modal while it is open, and focus returns to the opener when it closes.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Write a Clear Title",
        description:
          "Use a concise title that explains the decision or task before users read the body content.",
      },
      {
        title: "Keep the Task Focused",
        description:
          "Limit the modal to one related task and provide clear primary and secondary actions when a choice is required.",
      },
      {
        title: "Preserve Dismissal",
        description:
          "Keep the close button accessible and preserve Escape-key dismissal for keyboard users.",
      },
      {
        title: "Explain Destructive Outcomes",
        description:
          "Describe irreversible consequences before a user commits to a destructive action.",
      },
    ],
    donts: [
      {
        title: "Use a Modal for Long Content",
        description:
          "Use a page or another non-blocking pattern for large documents, multi-step workflows, or content users compare frequently.",
      },
      {
        title: "Omit Accessible Context",
        description:
          "Do not remove the title or description, and avoid vague action labels when the result is important.",
      },
      {
        title: "Stack Dialogs",
        description:
          "Do not open another modal from inside a modal without a deliberately designed focus and dismissal model.",
      },
      {
        title: "Hide Essential Information",
        description:
          "Do not place critical information only behind a modal or rely on the backdrop as the only way to close it.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "isOpen",
      type: "boolean",
      description: "Controls whether the modal is rendered and visible.",
    },
    {
      name: "onClose",
      type: "() => void",
      description:
        "Runs when the user presses Escape, activates the close button, or clicks the backdrop.",
    },
    {
      name: "title",
      type: "string",
      description: "Visible heading and accessible name for the dialog.",
    },
    {
      name: "description",
      type: "string",
      description:
        "Supporting description associated with the dialog through aria-describedby.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description:
        "Content rendered in the modal body, including forms, messages, and actions.",
    },
  ],
  relatedComponents: ["Button", "Card", "Tooltip"],
};
