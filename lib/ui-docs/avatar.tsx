import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Avatar } from "@/components/patterns/Avatar";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const avatarDoc: UiComponentDoc = {
  title: "Avatar",
  description:
    "Avatars identify a person or account with an image, initials, or a neutral placeholder while keeping identity information compact and easy to scan.",
  showcase: {
    name: "Avatar",
    componentName: "Avatar",
    usageCode: UsageCodesBlock.avatarUsage,
    preview: (
      <div className="space-y-10">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-system-heading">Image and fallback states</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <Avatar src="/avatar-demo.svg" alt="Alex Morgan" />
              <span className="text-sm text-system-text">Image</span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar fallback="Jordan Lee" aria-label="Jordan Lee" />
              <span className="text-sm text-system-text">Initials</span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar aria-label="Unknown user" />
              <span className="text-sm text-system-text">Placeholder</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-system-heading">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-2 text-center">
              <Avatar size="sm" fallback="SM" aria-label="Small avatar" />
              <p className="text-xs text-system-comment">sm</p>
            </div>
            <div className="space-y-2 text-center">
              <Avatar size="md" fallback="MD" aria-label="Medium avatar" />
              <p className="text-xs text-system-comment">md</p>
            </div>
            <div className="space-y-2 text-center">
              <Avatar size="lg" fallback="LG" aria-label="Large avatar" />
              <p className="text-xs text-system-comment">lg</p>
            </div>
          </div>
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
          <li>Renders an image with src and alt when a source is available.</li>
          <li>Falls back to up to two uppercase characters when an image is unavailable.</li>
          <li>Shows a neutral user icon when no image or fallback is provided.</li>
          <li>Supports sm, md, and lg sizes with loading and error states.</li>
          <li>Forwards refs, native div attributes, className overrides, and semantic tokens.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use avatars in account menus, comments, activity feeds, team lists, participant lists, and compact profile summaries. Pair the avatar with a visible name or account context when identity matters, and use a separately labeled button or link when the avatar needs to be interactive.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Use meaningful alt text when the image conveys identity, or an empty alt value when nearby text already identifies the person. Initials are visual fallback content, so provide an aria-label when no adjacent name exists. Avatar remains presentational and does not add keyboard behavior or interactive roles by itself; maintain sufficient contrast for fallback text and the neutral icon.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Describe Identity",
        description: "Provide meaningful alt text or pair the avatar with a visible name when the image conveys identity.",
      },
      {
        title: "Use Short Fallbacks",
        description: "Use recognizable initials or another brief fallback that remains legible at the selected size.",
      },
      {
        title: "Keep Sizes Consistent",
        description: "Use the same avatar size within a list, table, navigation pattern, or other repeated context.",
      },
      {
        title: "Label Interactions",
        description: "Wrap an interactive avatar in an appropriately labeled button or link instead of adding interaction to Avatar itself.",
      },
    ],
    donts: [
      {
        title: "Hide the Name",
        description: "Do not make the avatar the only source of a person's name or account identity.",
      },
      {
        title: "Use Long Fallback Text",
        description: "Do not pass lengthy fallback text that becomes truncated or difficult to read.",
      },
      {
        title: "Encode Status With Color",
        description: "Do not imply status, verification, or availability through avatar color alone.",
      },
      {
        title: "Assume Images Always Load",
        description: "Do not rely on a remote image without providing a useful fallback or allowing the neutral placeholder state.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "src",
      type: "string",
      description: "Optional image source. Missing or failed images use fallback text or the neutral user icon.",
    },
    {
      name: "alt",
      type: "string",
      description: "Alternative text passed to the image; defaults to Avatar.",
    },
    {
      name: "fallback",
      type: "string",
      description: "Optional fallback text rendered as up to the first two uppercase characters.",
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg'",
      description: "Controls avatar dimensions and fallback/icon scale; defaults to md.",
    },
    {
      name: "className",
      type: "string",
      description: "Adds or overrides utility classes on the avatar container.",
    },
    {
      name: "...props",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description: "Native container attributes such as id, aria-*, data-*, and event handlers.",
    },
  ],
  relatedComponents: ["Card", "Tooltip", "Button"],
};
