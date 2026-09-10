import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/patterns/Accordion";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const accordionDoc: UiComponentDoc = {
  title: "Accordion",
  description:
    "Accordions organize related information into collapsible sections so users can reveal detail without leaving the current context.",
  showcase: {
    name: "Accordion",
    componentName: "Accordion",
    usageCode: UsageCodesBlock.accordionUsage,
    preview: (
      <Accordion type="single" defaultValue="shipping" className="w-full max-w-2xl">
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping and delivery</AccordionTrigger>
          <AccordionContent>
            Standard delivery takes three to five business days. Express options
            are available at checkout.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>Returns and exchanges</AccordionTrigger>
          <AccordionContent>
            Items can be returned within 30 days when they are unused and in
            their original packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>Contact support</AccordionTrigger>
          <AccordionContent>
            Our support team is available Monday through Friday to help with
            orders, billing, and account questions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Single or multiple expanded items.</li>
          <li>Single mode toggles one item at a time and can collapse it again.</li>
          <li>Controlled and uncontrolled value management.</li>
          <li>Composable triggers and content with forwarded refs.</li>
          <li>Theme-aware styling through semantic system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use accordions for FAQs, settings groups, product details, and secondary information that does not need to be visible all at once. Use type=\"single\" for one open section or type=\"multiple\" when sections can be compared. Use value with onValueChange for controlled state, or defaultValue for uncontrolled state. Keep critical instructions and primary actions visible instead.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Use concise, descriptive trigger labels. Each trigger is a native button with expanded and controls states, and each open panel is a labelled region. Test the complete accordion with keyboard navigation and a screen reader.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Write Descriptive Triggers",
        description: "Label each section with a short phrase that clearly describes the content it reveals.",
      },
      {
        title: "Keep Content Focused",
        description: "Use each item for one related topic and keep the revealed content easy to scan.",
      },
      {
        title: "Choose the Right Mode",
        description: "Use single mode for mutually exclusive sections and multiple mode when users may compare sections.",
      },
      {
        title: "Preserve Keyboard Access",
        description: "Keep the native trigger button behavior and ensure focus remains visible.",
      },
    ],
    donts: [
      {
        title: "Hide Essential Information",
        description: "Do not place critical instructions, errors, or required actions behind a collapsed section.",
      },
      {
        title: "Use Vague Labels",
        description: "Avoid labels such as 'More' or 'Details' when they do not identify the content inside.",
      },
      {
        title: "Nest Excessively",
        description: "Avoid deeply nested accordions because they make location and navigation difficult to understand.",
      },
      {
        title: "Mix Unrelated Topics",
        description: "Do not combine unrelated content in one item just to reduce the number of visible rows.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "type",
      type: '"single" | "multiple"',
      description: "Controls whether one or multiple items can be open at the same time.",
    },
    {
      name: "value",
      type: "string | string[]",
      description: "Controls the open item or items; use with onValueChange.",
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "Sets the initially open item or items for uncontrolled usage.",
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      description: "Runs when the open item or items change.",
    },
    {
      name: "AccordionItem",
      type: "{ value: string } & React.HTMLAttributes<HTMLDivElement>",
      description: "Defines one uniquely identified accordion section.",
    },
    {
      name: "AccordionTrigger",
      type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
      description: "The native button that toggles its parent item.",
    },
    {
      name: "AccordionContent",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "The collapsible region associated with its parent trigger.",
    },
  ],
  relatedComponents: ["Card", "Tabs", "Button"],
};
