import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Switch } from "@/components/ui/Switch";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const switchDoc: UiComponentDoc = {
  title: "Switch",
  description:
    "Switches let users turn a single setting on or off and apply the change immediately. Use a clear label to describe the setting or behavior the switch controls.",
  showcase: {
    name: "Switch",
    componentName: "Switch",
    usageCode: UsageCodesUI.switchUsage,
    preview: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Switch id="switch-notifications" defaultChecked />
          <label
            htmlFor="switch-notifications"
            className="cursor-pointer text-sm font-medium text-system-heading"
          >
            Enable notifications
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="switch-dark-mode" />
          <label
            htmlFor="switch-dark-mode"
            className="cursor-pointer text-sm font-medium text-system-heading"
          >
            Dark mode
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="switch-disabled" disabled />
          <label
            htmlFor="switch-disabled"
            className="cursor-not-allowed text-sm font-medium text-system-heading opacity-70"
          >
            Disabled setting
          </label>
        </div>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Controlled and uncontrolled checked state with onCheckedChange.</li>
          <li>Semantic switch role with checked, unchecked, focus, and disabled states.</li>
          <li>Supports keyboard activation through native button behavior.</li>
          <li>Theme-aware styling through existing semantic design tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use switches for settings that have two clear states and take effect immediately, such as notifications, visibility, or a display mode. Use a checkbox when the user is making a selection that is submitted with a form or may be one of several independent choices.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Give every switch an accessible name with a visible label or an aria-label. Keep the label associated with the switch, preserve visible keyboard focus, communicate the current state through the switch semantics, and maintain sufficient contrast and a clear touch target.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Clear Setting Labels",
        description:
          "Label the behavior being controlled, such as 'Enable notifications', rather than using a generic word like 'On'.",
      },
      {
        title: "Use for Immediate Changes",
        description:
          "Use a switch when turning the setting on or off applies immediately and the two states are easy to understand.",
      },
      {
        title: "Show the Current State",
        description:
          "Keep the checked state synchronized with the setting so the control always reflects the current value.",
      },
      {
        title: "Provide an Accessible Name",
        description:
          "Pair the switch with a visible label or provide an aria-label when the control is intentionally presented without visible text.",
      },
    ],
    donts: [
      {
        title: "Use Ambiguous Labels",
        description:
          "Avoid labels such as 'Enable' or 'On' without saying what will be enabled or changed.",
      },
      {
        title: "Use for Form Submission Choices",
        description:
          "Do not use a switch when the user is selecting an option to submit later; use a checkbox or another form control instead.",
      },
      {
        title: "Hide the State Meaning",
        description:
          "Do not make users infer what checked and unchecked mean from color, position, or surrounding layout alone.",
      },
      {
        title: "Change State Without Feedback",
        description:
          "Do not leave the visual state out of sync with the setting or conceal important effects of turning it on or off.",
      },
      {
        title: "Disable Without Context",
        description:
          "Do not disable a setting without explaining the dependency or requirement when that information affects the user's next action.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "checked",
      type: "boolean",
      description: "Controls the switch state when used as a controlled component.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "Sets the initial state for an uncontrolled switch.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Called with the next state whenever the switch is activated.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Prevents interaction and communicates the disabled state to assistive technology.",
    },
    {
      name: "...props",
      type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
      description:
        "Supports native button attributes such as id, name, value, aria-label, aria-describedby, and onClick; onChange is not supported.",
    },
  ],
  relatedComponents: ["Checkbox", "Radio", "Button"],
};
