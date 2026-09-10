# Progress Component Documentation

## Overview

Progress communicates the completion state of a task or operation. It supports
linear and circular presentations, determinate values between `0` and `max`,
and indeterminate activity when the completion time is unknown.

The documentation should be as complete as `lib/ui-docs/button.tsx`, while
making clear that Progress is status feedback rather than a control users
operate directly.

## Requirements

The final documentation entry should follow the shared `UiComponentDoc`
structure used by the UI and block documentation entries.

Required documentation content:

- `title`: `Progress`.
- `description`: Explain that progress communicates task completion or ongoing
  activity.
- `showcase.name`: `Progress`.
- `showcase.componentName`: `Progress`.
- `showcase.usageCode`: a reusable Progress example from
  `UsageCodesBlock`.
- `showcase.preview`: examples of linear determinate, linear indeterminate,
  circular determinate, and circular indeterminate progress, each with an
  accessible label.
- `guidelines`: include `Features`, `When to use`, and `Accessibility`.
- `dosAndDonts`: include practical guidance for meaningful ranges, honest
  feedback, indeterminate work, color, and avoiding decorative or misleading
  progress indicators.
- `propsRows`: document every public `Progress` prop and the native div
  attributes it accepts.
- `relatedComponents`: include `Spinner`, `Skeleton`, and `Toast` (or the
  closest existing documented equivalents).

The guidelines should cover:

- `Features`: linear and circular variants, four semantic colors, determinate
  and indeterminate states, clamped values, configurable circular size and
  stroke width, forwarded refs and native attributes, and semantic progressbar
  roles.
- `When to use`: uploads, loading operations with measurable completion, and
  background work where users benefit from status feedback. Recommend a
  spinner or other status treatment when completion cannot be estimated, and
  inline text or a toast when a progress bar would add no useful context.
- `Accessibility`: provide an accessible name with `aria-label` or an
  associated labelling pattern; use `value` and `max` for determinate progress;
  omit `value` or set `indeterminate` when completion is unknown; do not rely on
  color alone; and keep the progressbar status separate from controls that
  start, cancel, or retry the operation.

The `dosAndDonts` section should include:

- `dos`:
  - Give the progressbar a meaningful accessible name describing the task.
  - Use determinate values when a reliable completion measure is available.
  - Keep the range consistent and update it as work advances.
  - Use indeterminate progress for work that is active but cannot be measured.
- `donts`:
  - Do not use progress to decorate a page or imply completion without real
    task state behind it.
  - Do not provide values outside the intended range or change `max` while a
    task is running without recalculating the value.
  - Do not communicate status with color alone; pair it with a label or nearby
    text when the state matters.
  - Do not leave an indeterminate indicator running after the operation has
    completed or failed.
  - Do not make a progressbar interactive or use it as a replacement for a
    button, spinner, or skeleton when those patterns fit better.

Required `propsRows` items:

- `variant`: `'linear' | 'circular'` — Selects the visual presentation.
- `color`: `'primary' | 'success' | 'warning' | 'error'` — Selects the semantic
  color.
- `value`: `number` — Current completion value; values are clamped to `0` and
  `max`. Omit it for indeterminate progress.
- `max`: `number` — Completion range maximum; defaults to `100`.
- `size`: `number` — Circular diameter in pixels; defaults to `40`.
- `strokeWidth`: `number` — Circular stroke width in pixels; defaults to `4`.
- `indeterminate`: `boolean` — Shows ongoing activity without a known
  completion value.
- `className`: `string` — Adds utility classes to the progressbar container.
- `...props`: `React.HTMLAttributes<HTMLDivElement>` — Native div and ARIA
  attributes, including `aria-label`, `id`, and event handlers.

Implementation requirements for `components/patterns/Progress.tsx`:

- Keep the component client-compatible and preserve the existing exported
  `Progress`, `ProgressProps`, and `progressVariants` API.
- Render a semantic `role="progressbar"` container for both variants and
  forward its ref and native attributes.
- Clamp determinate values safely, use a positive fallback when `max` is
  invalid, and never expose `aria-valuenow` for indeterminate progress.
- Preserve the existing linear and circular visual structure, system tokens,
  transitions, and indeterminate animation.
- Keep circular sizing and stroke width configurable without producing invalid
  SVG geometry for non-positive inputs.
- Do not add unsupported controls, labels, portals, or animation APIs.

Integration requirements:

- Add a reusable Progress usage snippet to `components/examples/UsageCodesBlock.tsx`.
- Add the completed Progress entry to `lib/ui-docs/index.ts` and expose it in
  the blocks navigation at `/components/blocks/progress`.
- Ensure `componentName: "Progress"` allows the generated source-preview
  registry to resolve `components/patterns/Progress.tsx`.
- Run `npm run generate:component-source` after changing docs source
  references; never edit `lib/component-source.ts` manually.
- Keep the documentation and implementation type-safe and aligned with the
  actual public API.

## References

- `lib/ui-docs/button.tsx` — reference documentation shape and completeness.
- `lib/ui-docs/card.tsx` — reference block documentation entry.
- `components/patterns/Progress.tsx` — source of truth for the Progress API.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered documentation
  sections.
- `components/examples/UsageCodesBlock.tsx` — block usage snippets.
- `lib/constants.ts` — block navigation.
- `lib/component-source.ts` and `scripts/generate-component-source.mjs` —
  generated source-preview registry and generator.

## Notes

- Progress is passive status feedback. Pair it with nearby task context and
  controls where appropriate.
- The existing API uses `value` omission and `indeterminate` to represent
  unknown completion; document both forms without inventing controlled state
  or callback props.
- Use existing `system-*` tokens and shared utility conventions. Do not add a
  one-off stylesheet for Progress.
