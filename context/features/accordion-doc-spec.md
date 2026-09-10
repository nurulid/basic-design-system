# Accordion Component Documentation

## Overview

Accordion is a composable block for revealing and hiding related content without
leaving the current page. It is made up of an `Accordion` root and the
`AccordionItem`, `AccordionTrigger`, and `AccordionContent` child components.
The component should support both a single expanded item and multiple expanded
items while preserving the design system's semantic tokens and keyboard-friendly
native button behavior.

## Requirements

- Document the component using the same `UiComponentDoc` structure as
  `lib/ui-docs/button.tsx` and `lib/ui-docs/card.tsx`.
- Include an interactive preview with at least three items, including a
  `defaultValue` example.
- Include a usage snippet that imports all four Accordion primitives.
- Explain single and multiple modes, controlled and uncontrolled usage, and the
  fact that a single item can be collapsed by activating its trigger again.
- Document features, appropriate use, and accessibility guidance.
- Include practical dos and don'ts for concise triggers, meaningful content,
  keyboard access, nesting, and long or unrelated content.
- Document the public props for `Accordion`, `AccordionItem`,
  `AccordionTrigger`, and `AccordionContent`, including native props and refs.
- Add the Accordion doc to the blocks documentation registry and blocks
  navigation so it is reachable at `/components/blocks/accordion`.
- Keep the implementation type-safe: `onValueChange` receives `string` in
  single mode and `string[]` in multiple mode, and avoid `any` in the public
  API.
- Triggers must expose `aria-expanded` and `aria-controls`; content must expose
  a matching `id`, `role="region"`, and `aria-labelledby`.
- Closed content must be hidden from keyboard and assistive-technology users,
  while the trigger remains a native `<button type="button">`.

## References

- `lib/ui-docs/button.tsx` — reference documentation shape and tone.
- `lib/ui-docs/card.tsx` — reference block documentation entry.
- `lib/types/docs.ts` — `UiComponentDoc` and props table types.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered docs sections.
- `components/patterns/Accordion.tsx` — Accordion implementation and public API.
- `components/examples/UsageCodesBlock.tsx` — block usage snippets.
- `lib/constants.ts` — block navigation and docs section navigation.

## Notes

- The source preview registry is generated; update source references through the
  docs entry and run `npm run generate:component-source` rather than editing
  `lib/component-source.ts` directly.
- Use existing `system-*` tokens and shared utility conventions. Do not add a
  one-off stylesheet for the Accordion.
- The component is client-side because it owns interactive expansion state.
