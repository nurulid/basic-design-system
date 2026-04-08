import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";
import { Upload, CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

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
        <ul className="space-y-2">
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
