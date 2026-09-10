# Tooltip Component Documentation

## Overview

Tooltip is a lightweight contextual message that explains an unfamiliar
control or adds brief supporting information without taking up permanent
space in the interface. It wraps one interactive or focusable trigger and
reveals content on hover or keyboard focus. The component should remain
usable with the existing semantic design tokens and should expose an
accessible relationship between the trigger and the tooltip content.

The documentation entry should be as complete as `lib/ui-docs/button.tsx`,
while making clear that a tooltip is supplementary guidance rather than a
replacement for a visible label, form instruction, or essential information.

## Requirements

- Complete the Tooltip documentation using the same `UiComponentDoc` structure
  as `lib/ui-docs/button.tsx` and `lib/ui-docs/card.tsx`.
- Add a `Tooltip` entry to the blocks documentation registry and blocks
  navigation so it is reachable at `/components/blocks/tooltip`.
- Include an interactive showcase with at least three triggers demonstrating:
  - the default top placement;
  - another placement such as right or bottom;
  - a trigger with custom `className` and concise contextual content.
- Include a usage snippet that imports `Tooltip` and demonstrates wrapping a
  button or another focusable element.
- Document the `top`, `right`, `bottom`, and `left` placement options, the
  default `side`, and the default `delayDuration`.
- Explain that the tooltip opens on pointer hover and keyboard focus and closes
  when the trigger is left or blurred. The implementation should cancel any
  pending open timer when the trigger is left or blurred and clean up timers on
  unmount.
- Make `delayDuration` functional: it controls the opening delay in
  milliseconds, while closing should happen immediately. A value of `0`
  should open immediately.
- Keep the trigger's existing event handlers when cloning it, and preserve
  native props, refs, and any existing `aria-describedby` value where
  applicable.
- The trigger must remain the original child element rather than being replaced
  by a non-semantic wrapper. Document that `children` should be one
  interactive or focusable `React.ReactElement`.
- When visible, the tooltip content must have `role="tooltip"`, a stable
  generated `id`, and the trigger must reference that ID with
  `aria-describedby`. Remove the generated relationship when the tooltip is
  hidden unless an existing relationship needs to be preserved.
- Ensure the tooltip is supplementary and non-interactive: it should not be
  used as a link, button, form control, or the only accessible name for a
  control. The content should not contain focusable elements.
- Support dismissal when the trigger loses focus or pointer hover. If the
  implementation adds Escape-key dismissal, document and test it consistently;
  do not imply that Escape is supported unless it is implemented.
- Use the existing `system-*` tokens and shared utility conventions. Keep the
  tooltip above nearby content with a suitable stacking order, prevent it from
  intercepting pointer events, and preserve readable contrast and whitespace.
- Keep the implementation type-safe and avoid `any` in the public API or event
  handlers. Use a React-compatible timer type and clear it whenever the
  tooltip closes or unmounts.
- Regenerate the component source registry after the docs entry references the
  component; do not edit `lib/component-source.ts` manually.

Required documentation content:

- `title`: `Tooltip`
- `description`: Explain that tooltips provide brief contextual help for an
  unfamiliar control or icon and should not hold essential information.
- `showcase.name`: `Tooltip`
- `showcase.componentName`: `Tooltip`
- `showcase.usageCode`: a tooltip usage example from the appropriate usage-code
  module.
- `guidelines`: include `Features`, `When to use`, and `Accessibility`.
- `dosAndDonts`: include practical guidance for concise content, labeling,
  placement, timing, and avoiding essential or interactive tooltip content.
- `propsRows`: document every public Tooltip prop and the supported child
  contract.
- `relatedComponents`: include `Button`, `Icon Button`, and `Popover` (or the
  closest existing documented equivalents).

The guidelines should cover:

- `Features`: hover and focus activation, configurable placement, delayed
  opening, generated IDs and tooltip semantics, custom class styling, and
  compatibility with semantic design-system tokens.
- `When to use`: brief explanations for unfamiliar icons, controls, or terms;
  use visible text, helper text, or a popover when information is essential,
  lengthy, interactive, or must remain discoverable.
- `Accessibility`: every trigger needs its own accessible name; keyboard users
  must be able to reveal the tooltip by focusing the trigger; content must use
  `role="tooltip"` and be connected with `aria-describedby`; focus indicators
  and contrast must remain visible; tooltips must not be the only way to access
  critical instructions.

The `dosAndDonts` section should include:

- `dos`:
  - Keep tooltip text short and directly relevant to the trigger.
  - Use a visible label or an accessible name for icon-only controls.
  - Choose a placement that does not obscure the trigger or nearby content.
  - Use a small delay to avoid accidental popups while keeping feedback timely.
- `donts`:
  - Do not put required instructions, warnings, or critical status information
    only in a tooltip.
  - Do not use a tooltip for long explanations or interactive content; use a
    popover or visible supporting content instead.
  - Do not attach a tooltip to a disabled element that cannot receive focus;
    wrap it with an appropriate focusable or explanatory element when needed.
  - Do not use vague, repetitive, or redundant text that merely repeats a
    visible label.
  - Do not allow tooltip content to disappear before keyboard or pointer users
    can reasonably read it.

Required `propsRows` items:

- `content`: `React.ReactNode`
  - Brief contextual content rendered inside the tooltip.
- `children`: `React.ReactElement`
  - The single trigger element that receives hover, focus, and ARIA behavior.
- `side`: `'top' | 'right' | 'bottom' | 'left'`
  - Controls the tooltip placement relative to the trigger; defaults to `top`.
- `className`: `string`
  - Adds or overrides utility classes on the tooltip content.
- `delayDuration`: `number`
  - Opening delay in milliseconds; defaults to `200` and supports `0` for
    immediate opening.

## References

- `lib/ui-docs/button.tsx` — reference documentation shape, completeness, and
  tone.
- `lib/ui-docs/card.tsx` — reference block documentation entry.
- `lib/types/docs.ts` — `UiComponentDoc` and props table types.
- `components/patterns/Tooltip.tsx` — source of truth for the Tooltip API and
  interaction behavior.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered docs sections.
- `components/blocks/ComponentShowcase.tsx` — showcase and source-preview
  behavior.
- `lib/constants.ts` — blocks navigation and docs section navigation.
- `components/examples/UsageCodesBlock.tsx` — block usage snippets, if the
  tooltip example belongs there.
- `components/examples/UsageCodesUI.tsx` — UI usage snippets, if that is where
  the tooltip example is maintained.

## Notes

- Tooltip is client-side because it owns hover/focus visibility state and a
  timer for delayed opening.
- The current implementation has a `delayDuration` prop and timer ref but does
  not yet apply the delay; completing the component must resolve that mismatch.
- Keep the wrapper layout-neutral (`inline-flex`/fit-content behavior) so it
  does not unexpectedly expand the trigger's layout.
- Positioning is intentionally limited to the four documented sides unless a
  future API adds collision detection or alignment controls; do not document
  unsupported viewport flipping or automatic collision handling.
- Do not invent controlled `open`/`onOpenChange`, touch-specific behavior,
  animation controls, or interactive tooltip content unless those APIs are
  implemented and added to the public type.
- Do not edit `lib/component-source.ts` directly; run
  `npm run generate:component-source` after updating source references.
