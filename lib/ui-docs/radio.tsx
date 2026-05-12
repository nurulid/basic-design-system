import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Radio, RadioGroup } from "@/components/ui/Radio";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const radioDoc: UiComponentDoc = {
  title: "Radio",
  description:
    "Radios let users select exactly one option from a small set of mutually exclusive choices. Clear, distinct labels help users compare options and make confident decisions.",
  showcase: {
    name: "Radio",
    componentName: "Radio",
    usageCode: UsageCodesUI.radioUsage,
    preview: (
      <div className="space-y-6">
        <RadioGroup legend="Delivery method">
          <Radio
            id="radio-standard"
            value="standard"
            label="Standard shipping"
            description="Delivery within 5–7 business days at no additional cost."
            defaultChecked
          />
          <Radio
            id="radio-express"
            value="express"
            label="Express shipping"
            description="Delivery within 1–2 business days for an additional $12.99."
          />
          <Radio
            id="radio-pickup"
            value="pickup"
            label="Local pickup"
            description="Available only when collection within the same region is possible."
            disabled
          />
        </RadioGroup>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Optional labels and supporting descriptions for each radio.</li>
          <li>Grouped usage through RadioGroup with a semantic fieldset and legend.</li>
          <li>Shared group naming, whether passed explicitly or inherited from RadioGroup.</li>
          <li>Visible selected, focus, and disabled states using semantic design tokens.</li>
          <li>Supports standard native radio behavior and attributes.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use radios when users must choose exactly one option from a defined list, such as delivery method, plan tier, or display preference. When multiple selections are allowed, use checkboxes instead.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Ensure each radio has a clear label. Group related radios with a legend when they answer a single question or belong to the same category. Keep descriptions associated with the radio via aria-describedby. Maintain visible keyboard focus, arrow-key navigation expectations, and sufficient contrast.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Descriptive Labels",
        description:
          "Use labels that make each option distinct and easy to compare, such as 'Standard shipping' and 'Express shipping'.",
      },
      {
        title: "Use Descriptions for Clarity",
        description:
          "Add a description for optional clarification when option details or consequences need more context.",
      },
      {
        title: "Group Related Options",
        description:
          "Use RadioGroup with a meaningful legend to communicate the question or category the options belong to.",
      },
      {
        title: "Use for One-at-a-Time Selection",
        description:
          "Use radios only when exactly one option can be selected at a time from a mutually exclusive set.",
      },
    ],
    donts: [
      {
        title: "Use Vague Labels",
        description:
          "Avoid labels like 'Option A' without meaningful context that allows users to compare choices.",
      },
      {
        title: "Use for Independent Choices",
        description:
          "Do not use radios for independent choices where users may need multiple selections. Use checkboxes instead.",
      },
      {
        title: "Rely on Layout Alone",
        description:
          "Do not rely on layout alone to communicate which radios belong to the same question without a legend.",
      },
      {
        title: "Hide Consequences from the Label",
        description:
          "Do not hide important tradeoffs or option details away from the radio label or description.",
      },
      {
        title: "Present Too Many Options",
        description:
          "Do not present too many options when another control such as Select would make comparison easier.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "label",
      type: "React.ReactNode",
      description: "Optional visible label associated with the radio input.",
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
      name: "name",
      type: "string",
      description:
        "Optional radio name; individual radios inherit the shared name from RadioGroup when one is not passed directly.",
    },
    {
      name: "legend",
      type: "React.ReactNode",
      description: "Required RadioGroup legend for grouped radio sets.",
    },
    {
      name: "...props",
      type: "React.InputHTMLAttributes<HTMLInputElement>",
      description:
        "Native radio attributes such as checked, defaultChecked, disabled, required, value, and onChange.",
    },
    {
      name: "...props (group)",
      type: "React.FieldsetHTMLAttributes<HTMLFieldSetElement>",
      description: "Native fieldset attributes for grouped radio layouts.",
    },
  ],
  relatedComponents: ["Checkbox", "Switch", "Select"],
};
