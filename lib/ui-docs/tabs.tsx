import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const tabsDoc: UiComponentDoc = {
  title: "Tabs",
  description:
    "Tabs organize related content into separate views so users can switch between sections without leaving the current context.",
  showcase: {
    name: "Tabs",
    componentName: "Tabs",
    usageCode: UsageCodesUI.tabsUsage,
    preview: (
      <Tabs defaultValue="account" className="w-full max-w-xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="rounded-2xl border border-system-border bg-system-card p-5">
          <h4 className="font-semibold text-system-heading">Account settings</h4>
          <p className="mt-2 text-sm text-system-text">Manage your profile details and account preferences.</p>
        </TabsContent>
        <TabsContent value="security" className="rounded-2xl border border-system-border bg-system-card p-5">
          <h4 className="font-semibold text-system-heading">Security settings</h4>
          <p className="mt-2 text-sm text-system-text">Review your password and sign-in protections.</p>
        </TabsContent>
        <TabsContent value="notifications" className="rounded-2xl border border-system-border bg-system-card p-5">
          <h4 className="font-semibold text-system-heading">Notification settings</h4>
          <p className="mt-2 text-sm text-system-text">Choose which updates you want to receive.</p>
        </TabsContent>
      </Tabs>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Controlled and uncontrolled selected-tab state.</li>
          <li>Arrow key, Home, and End navigation between tabs.</li>
          <li>Linked tab and tabpanel semantics with selected-state indicators.</li>
          <li>Disabled triggers and native HTML attributes on compound parts.</li>
          <li>Theme-aware styling through semantic system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use tabs for a small set of related views that users may switch between without comparing all content at once. Keep labels short and use another pattern when users need to see or compare every choice simultaneously.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Use concise, descriptive labels and provide a visible focus style. Tabs expose tablist, tab, and tabpanel semantics, support Arrow keys plus Home and End, and connect the active tab to its panel. Ensure contrast remains sufficient in every state.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Use Short Descriptive Labels",
        description: "Name each view with a concise label that makes its content clear without opening it.",
      },
      {
        title: "Group Related Views",
        description: "Use tabs when the views belong to the same context and users are likely to switch between them.",
      },
      {
        title: "Keep the Active State Clear",
        description: "Make the selected tab visually distinct and preserve a visible keyboard focus indicator.",
      },
      {
        title: "Choose a Useful Default",
        description: "Set defaultValue to the most useful initial view, or control value when the selection belongs to application state.",
      },
    ],
    donts: [
      {
        title: "Hide Unrelated Content",
        description: "Do not use tabs as a generic container for views that do not share a clear context.",
      },
      {
        title: "Use Long Tab Labels",
        description: "Avoid sentence-length labels that make the tab list difficult to scan or use on small screens.",
      },
      {
        title: "Overload One Tab List",
        description: "Do not add so many tabs that users cannot understand the available views at a glance.",
      },
      {
        title: "Hide Critical Information",
        description: "Do not place required instructions, errors, or primary actions only in an inactive panel.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "Tabs",
      type: "defaultValue?: string; value?: string; onValueChange?: (value: string) => void",
      description: "Provides selected-tab state. Use defaultValue for uncontrolled usage or value with onValueChange for controlled usage.",
    },
    {
      name: "TabsList",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "Groups tab triggers and exposes tablist semantics.",
    },
    {
      name: "TabsTrigger",
      type: "{ value: string } & React.ButtonHTMLAttributes<HTMLButtonElement>",
      description: "Selects the matching panel and supports disabled, focus, and keyboard interaction states.",
    },
    {
      name: "TabsContent",
      type: "{ value: string } & React.HTMLAttributes<HTMLDivElement>",
      description: "Renders the panel whose value matches the selected tab.",
    },
  ],
  relatedComponents: ["Accordion", "Select", "Radio"],
};
