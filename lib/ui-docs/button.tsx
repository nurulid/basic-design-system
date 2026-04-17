import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";
import { Upload, CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";
import { 
  DoButtonHierarchy, 
  DoButtonLoading, 
  DontButtonHierarchy, 
  DontButtonLoading 
} from "@/components/blocks/BestPracticesPreviews";

export const buttonDoc: UiComponentDoc = {
  title: "Button",
  description:
    "Buttons allow users to take actions, make choices, and trigger workflows. They represent the primary interaction points in this design system.",
  showcase: {
    name: "Button",
    componentName: "Button",
    usageCode: UsageCodesUI.buttonUsage,
    preview: (
      <>
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
      </>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Keyboard support with Enter and Space.</li>
          <li>Accessible labels and semantic button roles.</li>
          <li>Visual states for hover, focus, active, and disabled.</li>
          <li>Theme-aware styling through existing system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use buttons for primary actions, inline confirmations, form submissions, and intentional state changes where users expect immediate feedback.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Ensure visible focus styles, adequate color contrast, and descriptive text labels. Avoid icon-only labels unless an accessible name is provided.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Clear Action Labels",
        description: "Use verbs like 'Save', 'Send', or 'Delete' so the action is immediately understood.",
      },
      {
        title: "Keep Visual Hierarchy",
        description: "Use Primary for the main action and Ghost or Outline for secondary actions.",
        preview: <DoButtonHierarchy />,
      },
      {
        title: "Show Clear States",
        description: "Provide visual feedback, such as a loading state, while a process is running.",
        preview: <DoButtonLoading />,
      },
      {
        title: "Use Comfortable Sizing",
        description: "Make buttons easy to tap or click with at least a 44px hit area.",
      },
    ],
    donts: [
      {
        title: "Use Ambiguous Labels",
        description: "Avoid labels like 'OK' or 'Yes' that do not explain the result of the action.",
      },
      {
        title: "Overuse Primary Actions",
        description: "Do not place two Primary buttons side by side because it makes the priority unclear.",
        preview: <DontButtonHierarchy />,
      },
      {
        title: "Leave Users Without Feedback",
        description: "Do not let a button appear ready while the system is still processing.",
        preview: <DontButtonLoading />,
      },
      {
        title: "Write Overlong Labels",
        description: "Keep labels concise if they grow beyond two words.",
      },
      {
        title: "Use Red Without Meaning",
        description: "Reserve red for destructive actions that cannot be easily undone.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
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
  ],
  relatedComponents: ["Link Button", "Icon Button", "Toggle Button"],
};
