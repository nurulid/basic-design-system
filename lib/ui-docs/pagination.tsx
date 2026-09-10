import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/blocks/Pagination";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const paginationDoc: UiComponentDoc = {
  title: "Pagination",
  description:
    "Pagination helps users move through a finite set of pages while keeping the current location and available navigation actions clear.",
  showcase: {
    name: "Pagination",
    componentName: "Pagination",
    usageCode: UsageCodesBlock.paginationUsage,
    preview: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#previous" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#page-1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#page-2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#page-3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="list-dot space-y-2">
          <li>Composable navigation, page links, previous and next controls.</li>
          <li>Active page styling with aria-current=page.</li>
          <li>Ellipsis indicator for omitted ranges in long page lists.</li>
          <li>Shared Button sizing, focus states, and semantic token styling.</li>
          <li>Forwarded refs and native HTML attributes on primitives.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use pagination when a collection is large enough that showing every result at once would make scanning or loading difficult. Keep the page size predictable, preserve the user's position when possible, and use filtering or search alongside pagination when users need to find a specific result.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "The root is a navigation landmark labelled pagination. Use meaningful href destinations, expose the current page with aria-current=page, keep keyboard focus visible, and give previous, next, and ellipsis controls descriptive accessible names. Disabled boundary controls should be removed from the tab order or omitted when they cannot perform an action.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Show the Current Page",
        description:
          "Mark the current page with isActive so its visual and screen-reader state are clear.",
      },
      {
        title: "Use Real Destinations",
        description:
          "Give every page link a destination that represents the corresponding result set.",
      },
      {
        title: "Keep the Range Scannable",
        description:
          "Show useful nearby pages and use an ellipsis when a long range would become noisy.",
      },
      {
        title: "Label Navigation Clearly",
        description:
          "Keep visible labels concise while preserving the built-in accessible names for directional controls.",
      },
    ],
    donts: [
      {
        title: "Link the Current Page as a New Action",
        description:
          "Do not make the current page appear like an ordinary destination without its active state.",
      },
      {
        title: "Leave Boundary Actions Misleading",
        description:
          "Do not expose a previous or next control as interactive when no page exists in that direction.",
      },
      {
        title: "Use Ellipsis as a Link",
        description:
          "Do not make a visual omission indicator behave like a page unless it has a clearly defined destination and label.",
      },
      {
        title: "Create an Excessively Long Control Row",
        description:
          "Do not show every page in a large collection; use a deliberate range and ellipsis strategy instead.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "Pagination",
      type: "React.ComponentPropsWithoutRef<\"nav\">",
      description:
        "Root navigation landmark props; aria-label defaults to pagination.",
    },
    {
      name: "PaginationContent",
      type: "React.ComponentPropsWithoutRef<\"ul\">",
      description: "List props for the pagination controls, including className and ARIA attributes.",
    },
    {
      name: "PaginationItem",
      type: "React.ComponentPropsWithoutRef<\"li\">",
      description: "List item props for one pagination control or ellipsis.",
    },
    {
      name: "PaginationLink",
      type: "{ isActive?: boolean; size?: ButtonProps[\"size\"] } & React.ComponentPropsWithoutRef<\"a\">",
      description:
        "Anchor props for a page destination; isActive marks the current page and size controls the shared button sizing.",
    },
    {
      name: "PaginationPrevious / PaginationNext",
      type: "React.ComponentPropsWithoutRef<typeof PaginationLink>",
      description:
        "Directional pagination link props with built-in accessible labels and default, text-sized controls.",
    },
    {
      name: "PaginationEllipsis",
      type: "React.ComponentPropsWithoutRef<\"span\">",
      description:
        "Presentational span props for an omitted page range; it includes a screen-reader label of More pages.",
    },
  ],
  relatedComponents: ["Breadcrumb", "Button", "Tabs"],
};
