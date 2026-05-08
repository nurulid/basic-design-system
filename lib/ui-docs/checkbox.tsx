import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const checkboxDoc: UiComponentDoc = {
  title: "Checkbox",
  description:
    "Checkboxes allow users to make binary selections, opt in to preferences, and choose multiple independent options. Use clear labels so users understand the consequence of each selection.",
  showcase: {
    name: "Checkbox",
    componentName: "Checkbox",
    usageCode: UsageCodesUI.checkboxUsage,
    preview: (
      <div className="space-y-6">
        <CheckboxGroup legend="Notification preferences">
          <Checkbox
            id="cb-email"
            label="Email notifications"
            description="Receive product updates, tips, and announcements via email."
            defaultChecked
          />
          <Checkbox
            id="cb-push"
            label="Push notifications"
            description="Get notified instantly when someone interacts with your content."
          />
          <Checkbox
            id="cb-sms"
            label="SMS notifications"
            description="Receive alerts via text message for critical account activity."
            disabled
          />
        </CheckboxGroup>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Optional labels and supporting descriptions for each checkbox.</li>
          <li>Grouped usage through CheckboxGroup with a semantic fieldset and legend.</li>
          <li>Visible checked, focus, and disabled states using semantic design tokens.</li>
          <li>Supports standard native checkbox behavior and attributes.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use checkboxes for independent choices, optional preferences, acknowledgements, filters, and settings where more than one item may be selected. When users must choose exactly one option from a set, use radios instead.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Ensure each checkbox has a clear label. Group related checkboxes with a legend when they answer a single question or belong to the same category. Keep descriptions associated with the checkbox via aria-describedby. Maintain visible keyboard focus, adequate touch targets, and sufficient contrast.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Descriptive Labels",
        description:
          "Write labels that describe the exact choice or commitment being made, such as 'Send me weekly product updates'.",
      },
      {
        title: "Use Descriptions for Clarity",
        description:
          "Add a description when the label alone is not enough to help users understand the option.",
      },
      {
        title: "Group Related Options",
        description:
          "Use CheckboxGroup with a meaningful legend when checkboxes answer a shared question or belong to the same category.",
      },
      {
        title: "Use for Independent Choices",
        description:
          "Use checkboxes only when options are independent and multiple selections are valid.",
      },
    ],
    donts: [
      {
        title: "Use Vague Labels",
        description:
          "Avoid labels like 'Option 1' without context because they force users to guess what each choice means.",
      },
      {
        title: "Use for Mutually Exclusive Choices",
        description:
          "Do not present mutually exclusive options as checkboxes. Use radios when only one selection is allowed.",
      },
      {
        title: "Rely on Surrounding Layout Alone",
        description:
          "Do not rely on surrounding content or layout to explain what a checkbox controls without a clear label.",
      },
      {
        title: "Hide Consequences from the Label",
        description:
          "Do not hide important consequences or requirements away from the checkbox label or description.",
      },
      {
        title: "Disable Without Context",
        description:
          "Do not disable options without giving users enough context when the reason affects completion.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "label",
      type: "React.ReactNode",
      description: "Optional visible label associated with the checkbox input.",
    },
    {
      name: "description",
      type: "React.ReactNode",
      description:
        "Optional supporting text rendered below the label and connected with aria-describedby.",
    },
    {
      name: "id",
      type: "string",
      description:
        "Optional explicit ID for label and description association; otherwise generated internally.",
    },
    {
      name: "legend",
      type: "React.ReactNode",
      description: "Required CheckboxGroup legend for grouped checkbox sets.",
    },
    {
      name: "...props",
      type: "React.InputHTMLAttributes<HTMLInputElement>",
      description:
        "Native checkbox attributes such as checked, defaultChecked, disabled, required, name, value, and onChange.",
    },
    {
      name: "...props (group)",
      type: "React.FieldsetHTMLAttributes<HTMLFieldSetElement>",
      description: "Native fieldset attributes for grouped checkbox layouts.",
    },
  ],
  relatedComponents: ["Radio", "Switch", "Input"],
};
