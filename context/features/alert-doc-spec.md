# Alert Component Documentation

## Overview

Alert communicates an important message in the current context. It supports
four semantic variants—info, success, warning, and error—with a matching icon,
color treatment, and live-region behavior. Alerts are passive status feedback:
they do not provide dismissal, action, or interaction behavior by themselves.

The documentation should be as complete as `lib/ui-docs/button.tsx` while
explaining when an alert is appropriate and how its accessibility behavior
changes for critical versus non-disruptive messages.

## Requirements

The final documentation entry should follow the shared `UiComponentDoc`
structure used by the UI and block documentation entries.

Required documentation content:

- `title`: `Alert`.
- `description`: Explain that Alert presents contextual information, success,
  warning, or error feedback and is intended for messages that users need to
  notice in the current page context.
- `showcase.name`: `Alert`.
- `showcase.componentName`: `Alert`.
- `showcase.usageCode`: a reusable Alert example from
  `components/examples/UsageCodesBlock.tsx`.
- `showcase.preview`: demonstrate all four variants, including at least one
  titled alert and one alert containing more than a single line of message
  content.
- `guidelines`: include `Features`, `When to use`, and `Accessibility`.
- `dosAndDonts`: include practical guidance for choosing variants, writing
  concise messages, preserving readable content, and avoiding alert misuse.
- `propsRows`: document every public `Alert` prop and the native div
  attributes it accepts.
- `relatedComponents`: include `Toast`, `Modal`, and `Card` (or the closest
  existing documented equivalents).

The guidelines should cover:

- `Features`: the `info`, `success`, `warning`, and `error` variants; matching
  semantic icons and system tokens; optional `title`; arbitrary React children
  for the message; forwarded refs and native div attributes; className
  overrides; and the component's built-in live-region semantics.
- `When to use`: inline validation summaries, important page-level feedback,
  completed or failed operations, warnings that affect the user's next step,
  and informational context that must remain visible. Recommend a Toast for
  transient feedback and a Modal when the user must make a decision before
  continuing. Do not use Alert for ordinary decorative text or every minor
  status update.
- `Accessibility`: warning and error variants use `role="alert"` with
  `aria-live="assertive"`; info and success use `role="status"` with
  `aria-live="polite"`. Explain that messages should be clear in text and not
  rely on color or the icon alone. Titles should add useful context rather
  than repeat the message, and any controls placed inside the children still
  need their own accessible names and keyboard behavior.

The `dosAndDonts` section should include:

- `dos`:
  - Choose the variant that matches the meaning of the message, not merely its
    preferred color.
  - Start with concise, actionable text that explains what happened or what
    the user should do next.
  - Use `title` for a short summary and children for supporting details.
  - Pair important alerts with text that remains understandable without color,
    icons, or visual styling.
- `donts`:
  - Do not use an alert as a substitute for a button, modal, toast, or form
    control.
  - Do not use `warning` or `error` styling for routine success or neutral
    information.
  - Do not put unrelated messages into one alert or write a long block that
    hides the primary action or explanation.
  - Do not rely on the icon or color alone to communicate the alert's meaning.
  - Do not add a dismiss button or other interaction unless it is implemented
    as a separately labeled control inside the alert content.

Required `propsRows` items:

- `variant`: `'info' | 'success' | 'warning' | 'error'` — Selects the semantic
  style, icon, and live-region behavior; defaults to `info`.
- `title`: `string` — Optional short heading rendered above the message.
- `children`: `React.ReactNode` — Alert message content, including text or
  appropriately labeled inline content.
- `className`: `string` — Adds or overrides utility classes on the alert
  container.
- `...props`: `React.HTMLAttributes<HTMLDivElement>` — Native div and ARIA
  attributes such as `id`, `data-*`, event handlers, and custom labeling
  attributes.
- `ref`: `React.Ref<HTMLDivElement>` — Forwarded ref to the alert container.

Implementation and integration requirements:

- Preserve the exported `Alert`, `AlertProps`, and `alertVariants` API.
- Keep the component ref-forwarding and native div attribute behavior intact.
- Preserve the existing variant-to-icon mapping and semantic `system-*`
  tokens.
- Preserve the current live-region behavior: `warning` and `error` are
  assertive alerts, while `info` and `success` are polite status messages.
- Do not invent dismiss, action, loading, timeout, or callback props that are
  not present in `components/patterns/Alert.tsx`.
- If the component is added to the docs registry, add it to the blocks
  navigation and include a reusable usage snippet so the generated
  source-preview registry can resolve `components/patterns/Alert.tsx`.
- Run `npm run generate:component-source` after changing docs source
  references; never edit `lib/component-source.ts` manually.

## References

- `lib/ui-docs/button.tsx` — reference documentation shape, completeness, and
  tone.
- `lib/types/docs.ts` — `UiComponentDoc` and props table types.
- `components/patterns/Alert.tsx` — source of truth for the Alert API, variants,
  icons, and live-region behavior.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered documentation
  sections.
- `components/blocks/ComponentShowcase.tsx` — showcase and source-preview
  behavior.
- `components/examples/UsageCodesBlock.tsx` — location for a reusable Alert
  usage snippet if Alert is documented as a block.
- `lib/constants.ts` — blocks navigation and docs section navigation.

## Notes

- Alert is passive status feedback. Keep actions, dismissal, and retry behavior
  explicit in separately documented controls or compositions.
- The implementation derives the role and politeness from `variant`; do not
  override that behavior in examples without a specific accessibility reason.
- Use existing semantic design-system tokens and shared utility conventions.
  Do not add one-off stylesheet requirements for Alert.
- Keep examples readable with a concise message and use titles only when they
  improve scanning or provide useful context.
