import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const selectDoc: UiComponentDoc = {
  title: "Select",
  description:
    "Select controls let users choose one value from a predefined list while keeping compact forms and settings easy to scan.",
  showcase: {
    name: "Select",
    componentName: "Select",
    usageCode: UsageCodesUI.selectUsage,
    preview: (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select>
          <SelectTrigger aria-label="Theme">
            <SelectValue placeholder="Choose a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="monthly">
          <SelectTrigger aria-label="Billing cycle">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
            <SelectItem value="legacy" disabled>Legacy plan</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Controlled and uncontrolled selection state.</li>
          <li>Keyboard navigation with selected and disabled states.</li>
          <li>Selected option labels and placeholder support.</li>
          <li>Semantic token styling with accessible combobox and listbox roles.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use Select for one choice from a short-to-medium list in compact forms or settings. Use Radio when seeing and comparing every option at once is important.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Give the trigger meaningful visible text or an accessible name, preserve visible focus, and ensure combobox, listbox, and option semantics remain usable with the keyboard and have sufficient contrast.",
    },
  ],
  dosAndDonts: {
    dos: [
      { title: "Use Clear Prompts", description: "Use concise placeholder text or a visible label that explains what users are choosing." },
      { title: "Order Options Logically", description: "Use a predictable order, such as alphabetical, chronological, or most frequently used first." },
      { title: "Provide a Useful Default", description: "Preselect a safe, common value when the form has a sensible default." },
      { title: "Use Radio for Comparison", description: "Choose Radio when the list is short and comparing all choices matters." },
    ],
    donts: [
      { title: "Use Select for Multiple Values", description: "Do not use this single-value control for multi-selection; use Checkbox or another multi-select pattern." },
      { title: "Hide Critical Instructions", description: "Do not put required instructions only in placeholder text that disappears after selection." },
      { title: "Present an Unnecessarily Long List", description: "Avoid forcing users through a very long list when search or another pattern would be more appropriate." },
      { title: "Leave the Trigger Unnamed", description: "Do not rely on an unlabeled control; provide visible text or an aria-label." },
    ],
  },
  propsRows: [
    { name: "Select", type: "{ value?: string; defaultValue?: string; onValueChange?: (value: string) => void; children: React.ReactNode }", description: "Controls selection state and contains the compound Select parts." },
    { name: "SelectTrigger", type: "React.ButtonHTMLAttributes<HTMLButtonElement>", description: "Opens the list and accepts native button attributes such as disabled, id, aria-label, and className." },
    { name: "SelectValue", type: "{ placeholder?: string }", description: "Displays the selected option label or the placeholder when no value is selected." },
    { name: "SelectContent", type: "React.HTMLAttributes<HTMLDivElement>", description: "Renders the open listbox and accepts native div attributes such as className." },
    { name: "SelectItem", type: "React.HTMLAttributes<HTMLDivElement> & { value: string; disabled?: boolean }", description: "Defines one selectable option." },
  ],
  relatedComponents: ["Input", "Radio", "Checkbox"],
};
