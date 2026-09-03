import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/blocks/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const cardDoc: UiComponentDoc = {
  title: "Card",
  description:
    "Cards group related content, metadata, forms, and actions into a clear, reusable surface. Use the card regions to create a consistent visual and semantic hierarchy.",
  showcase: {
    name: "Card",
    componentName: "Card",
    usageCode: UsageCodesBlock.cardUsage,
    preview: (
      <div className="flex w-full justify-center">
        <Card className="w-full max-w-sm" as="article">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              label="Name"
              id="card-project-name"
              placeholder="Name of your project"
            />
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    ),
  },
  guidelines: [
    {
      title: "Features",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 list-dot">
          <li>Semantic container options through div, article, or section.</li>
          <li>
            Composable header, title, description, content, and footer regions.
          </li>
          <li>Forwarded refs and native HTML attributes on every region.</li>
          <li>Theme-aware styling through semantic design-system tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use cards for related content, forms, settings, previews, summaries, and grouped actions that benefit from visual separation. Avoid wrapping every small piece of content in a card or implying interactivity without an actual interactive element.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Choose the as element that matches the content's semantics and give distinct sections a meaningful heading with CardTitle. Interactive controls inside a card still need their own labels, visible focus styles, and keyboard behavior.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Group Related Content",
        description:
          "Give each card a clear purpose and keep its information and actions focused on that purpose.",
      },
      {
        title: "Establish a Heading",
        description:
          "Use CardHeader and CardTitle to give a distinct card a meaningful heading and clear hierarchy.",
      },
      {
        title: "Add Supporting Context",
        description:
          "Use CardDescription for concise context that helps users understand the card's content or task.",
      },
      {
        title: "Keep Actions Together",
        description:
          "Place actions or related metadata in CardFooter when they belong to the card as a whole.",
      },
    ],
    donts: [
      {
        title: "Mix Unrelated Content",
        description:
          "Do not put unrelated information into the same card simply because it fits visually.",
      },
      {
        title: "Imply Interaction",
        description:
          "Do not use a card's visual container as a substitute for a button or link.",
      },
      {
        title: "Omit Section Headings",
        description:
          "Do not omit a meaningful heading when the card represents a distinct section of content.",
      },
      {
        title: "Nest Without Hierarchy",
        description:
          "Avoid repeated card nesting unless each level has a clear structural purpose.",
      },
      {
        title: "Use the Wrong Semantics",
        description:
          "Do not choose div, article, or section based only on styling; select the element that matches the content.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "as",
      type: "'div' | 'article' | 'section'",
      description:
        "Selects the semantic HTML element used for the Card container; defaults to div.",
    },
    {
      name: "className",
      type: "string",
      description: "Adds or overrides utility classes on the Card container.",
    },
    {
      name: "...props",
      type: "React.HTMLAttributes<HTMLElement>",
      description:
        "Native container attributes such as id, role, aria-* attributes, and event handlers.",
    },
    {
      name: "CardHeader",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "Props for the card header region.",
    },
    {
      name: "CardTitle",
      type: "React.HTMLAttributes<HTMLHeadingElement>",
      description: "Heading props for the card title.",
    },
    {
      name: "CardDescription",
      type: "React.HTMLAttributes<HTMLParagraphElement>",
      description: "Props for the supporting card description.",
    },
    {
      name: "CardContent",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "Props for the main card content region.",
    },
    {
      name: "CardFooter",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "Props for the card footer region.",
    },
  ],
  relatedComponents: ["Button", "Input", "Tabs"],
};
