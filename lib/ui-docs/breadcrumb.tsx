import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/patterns/Breadcrumb";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const breadcrumbDoc: UiComponentDoc = {
  title: "Breadcrumb",
  description:
    "Breadcrumbs show a user's location within a hierarchy and provide a compact way to navigate back to ancestor pages.",
  showcase: {
    name: "Breadcrumb",
    componentName: "Breadcrumb",
    usageCode: UsageCodesBlock.breadcrumbUsage,
    preview: (
      <div className="flex w-full flex-col gap-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design system</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Members</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Semantic navigation landmark with an ordered hierarchy.</li>
          <li>Composable links, current-page text, and separators.</li>
          <li>Default chevron with support for custom separator content.</li>
          <li>Responsive wrapping for longer paths.</li>
          <li>Forwarded refs and native HTML attributes on primitives.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use breadcrumbs when a page belongs to a meaningful hierarchy, such as a workspace, settings area, file tree, or catalog. Keep ancestor entries linked and make the final entry the user's current location. Do not use breadcrumbs as the only navigation method.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "The root creates a breadcrumb navigation landmark and the current page is exposed with aria-current=\"page\". Use descriptive link text, preserve visible focus styles, and test the complete path with keyboard navigation and a screen reader.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Link Ancestor Pages",
        description: "Make every previous location actionable so users can move up the hierarchy quickly.",
      },
      {
        title: "Mark the Current Page",
        description: "Use BreadcrumbPage for the final location so it is presented as text rather than an unnecessary link.",
      },
      {
        title: "Keep Labels Specific",
        description: "Use concise labels that identify the destination without relying on surrounding context.",
      },
      {
        title: "Choose a Clear Separator",
        description: "Use the default chevron or a restrained custom separator that reinforces hierarchy without becoming content.",
      },
    ],
    donts: [
      {
        title: "Link the Current Page",
        description: "Do not make the final breadcrumb item interactive when it already represents the current location.",
      },
      {
        title: "Use Breadcrumbs as Primary Navigation",
        description: "Do not replace a main navigation, back action, or other navigation pattern with breadcrumbs alone.",
      },
      {
        title: "Add Decorative Items to the Hierarchy",
        description: "Avoid inserting icons or labels that look like locations but do not map to a real destination.",
      },
      {
        title: "Let Paths Become Unusable",
        description: "Do not allow long labels to overflow; shorten labels or introduce a deliberate collapsing pattern for very deep paths.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "Breadcrumb",
      type: "React.ComponentPropsWithoutRef<\"nav\">",
      description: "Root navigation landmark props; aria-label defaults to breadcrumb.",
    },
    {
      name: "BreadcrumbList",
      type: "React.ComponentPropsWithoutRef<\"ol\">",
      description: "Ordered list props for the breadcrumb hierarchy, including className and aria attributes.",
    },
    {
      name: "BreadcrumbItem",
      type: "React.ComponentPropsWithoutRef<\"li\">",
      description: "List item props for one breadcrumb link or current-page entry.",
    },
    {
      name: "BreadcrumbLink",
      type: "React.ComponentPropsWithoutRef<\"a\">",
      description: "Native anchor props for an ancestor page, including href, target, and event handlers.",
    },
    {
      name: "BreadcrumbPage",
      type: "React.ComponentPropsWithoutRef<\"span\">",
      description: "Props for the non-interactive current-page entry with aria-current=\"page\".",
    },
    {
      name: "BreadcrumbSeparator",
      type: "React.ComponentProps<\"li\">",
      description: "Separator list item props; renders a chevron by default and accepts custom children.",
    },
  ],
  relatedComponents: ["Link Button", "Card", "Sidebar"],
};
