import type { UiComponentDoc } from "@/lib/types";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Progress } from "@/components/blocks/Progress";
import { CheckCircle2, Lightbulb, ShieldCheck } from "lucide-react";

export const progressDoc: UiComponentDoc = {
  title: "Progress",
  description:
    "Progress communicates how much of a task is complete or that an operation is still active when its completion cannot be measured.",
  showcase: {
    name: "Progress",
    componentName: "Progress",
    usageCode: UsageCodesBlock.progressUsage,
    preview: (
      <div className="w-full space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-system-text">
            <span>Uploading files</span>
            <span>65%</span>
          </div>
          <Progress value={65} aria-label="Uploading files: 65 percent" />
        </div>

        <div className="space-y-3">
          <p className="text-sm text-system-text">Preparing workspace</p>
          <Progress
            indeterminate
            color="warning"
            aria-label="Preparing workspace"
          />
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <Progress
            variant="circular"
            value={80}
            color="success"
            aria-label="Syncing data: 80 percent"
          />
          <Progress
            variant="circular"
            indeterminate
            color="error"
            aria-label="Connecting to server"
          />
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
          <li>Linear and circular presentations for the same progress state.</li>
          <li>Determinate values or indeterminate activity feedback.</li>
          <li>Semantic colors for primary, success, warning, and error states.</li>
          <li>Configurable circular size and stroke width with native div props.</li>
        </ul>
      ),
    },
    {
      title: "When to use",
      icon: <Lightbulb className="h-5 w-5" />,
      content:
        "Use Progress for uploads, measurable loading operations, and background work where status helps users decide what to do next. Use a spinner or another status treatment when completion cannot be estimated, and use inline text or a toast when a bar adds no useful context.",
    },
    {
      title: "Accessibility",
      icon: <ShieldCheck className="h-5 w-5" />,
      content:
        "Give every progressbar a meaningful accessible name with aria-label or an associated labelling pattern. Use value and max for determinate progress, omit the value or set indeterminate when completion is unknown, and never rely on color alone to communicate status.",
    },
  ],
  dosAndDonts: {
    dos: [
      {
        title: "Name the Task",
        description:
          "Describe what is progressing, such as 'Uploading files', instead of exposing an unlabeled status indicator.",
      },
      {
        title: "Use Honest Values",
        description:
          "Use determinate progress only when the value reflects a reliable completion measure and update it as work advances.",
      },
      {
        title: "Show Unknown Activity",
        description:
          "Use indeterminate progress when work is active but its completion time or amount cannot be measured.",
      },
      {
        title: "Keep Status Separate",
        description:
          "Pair progress with nearby task context and separate controls for canceling, retrying, or starting the operation.",
      },
    ],
    donts: [
      {
        title: "Use It as Decoration",
        description:
          "Do not show progress unless it represents real task state that users may need to understand.",
      },
      {
        title: "Misrepresent Completion",
        description:
          "Do not expose arbitrary values or change max without recalculating the current value.",
      },
      {
        title: "Rely on Color Alone",
        description:
          "Do not make users interpret warning, success, or error from color without a label or supporting text.",
      },
      {
        title: "Leave Activity Running",
        description:
          "Stop indeterminate progress when the operation completes or fails.",
        dangerous: true,
      },
    ],
  },
  propsRows: [
    {
      name: "variant",
      type: "'linear' | 'circular'",
      description: "Selects the progress presentation; defaults to linear.",
    },
    {
      name: "color",
      type: "'primary' | 'success' | 'warning' | 'error'",
      description: "Selects the semantic progress color; defaults to primary.",
    },
    {
      name: "value",
      type: "number",
      description: "Current completion value, clamped between 0 and max.",
    },
    {
      name: "max",
      type: "number",
      description: "Maximum completion value; defaults to 100.",
    },
    {
      name: "size",
      type: "number",
      description: "Circular diameter in pixels; defaults to 40.",
    },
    {
      name: "strokeWidth",
      type: "number",
      description: "Circular stroke width in pixels; defaults to 4.",
    },
    {
      name: "indeterminate",
      type: "boolean",
      description: "Shows activity without a known completion value.",
    },
    {
      name: "...props",
      type: "React.HTMLAttributes<HTMLDivElement>",
      description:
        "Native div and ARIA attributes such as aria-label, id, and event handlers.",
    },
  ],
  relatedComponents: ["Spinner", "Skeleton", "Toast"],
};
