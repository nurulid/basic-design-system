# Modal Component Documentation

## Overview

Modal is an interruptive dialog surface for focused tasks, confirmations, and
short flows that temporarily require the user's attention. It renders a
centered dialog above a dismissible backdrop, exposes a clear title and
description, and accepts arbitrary React content for the dialog body.

The documentation should be as complete as `lib/ui-docs/button.tsx`, while
making clear that a modal is a blocking interaction pattern rather than a
general-purpose container or a replacement for page content.

## Requirements

The final documentation entry should follow the same `UiComponentDoc`
structure as `lib/ui-docs/button.tsx` and the other block documentation
entries.

Required documentation content:

- `title`: `Modal`.
- `description`: Explain that modals focus attention on a short task,
  confirmation, or decision without leaving the current page.
- `showcase.name`: `Modal`.
- `showcase.componentName`: `Modal`.
- `showcase.usageCode`: a modal usage example from the appropriate
  `UsageCodesBlock` usage-code module.
- `showcase.preview`: an interactive example with a button that opens the
  modal, a meaningful title and description, body content, and a way to close
  it. The preview should demonstrate the component's actual open/close API.
- `guidelines`: include `Features`, `When to use`, and `Accessibility`.
- `dosAndDonts`: include practical guidance for focused content, clear
  actions, dismissal, destructive confirmations, nesting, and avoiding long
  or unrelated flows.
- `propsRows`: document every public `Modal` prop listed below.
- `relatedComponents`: include `Button`, `Card`, and `Tooltip` (or the closest
  existing documented equivalents).

The guidelines should cover:

- `Features`: controlled visibility through `isOpen` and `onClose`, title and
  description semantics, arbitrary body content, backdrop dismissal, Escape
  dismissal, a close button, body scroll locking, initial focus, and semantic
  design-system tokens.
- `When to use`: confirmations, focused forms, short edits, and actions that
  benefit from an explicit decision before continuing. Recommend a page,
  drawer, popover, or inline content for long, navigational, or frequently
  referenced information.
- `Accessibility`: the dialog must use `role="dialog"` and
  `aria-modal="true"`; its accessible name must reference the rendered title;
  its description must reference the rendered description; keyboard users must
  be able to reach the dialog and its controls; Escape must dismiss it; focus
  must not escape while it is open; and focus should return to the element
  that opened the modal after it closes.

The `dosAndDonts` section should include:

- `dos`:
  - Use a concise, descriptive title that explains the decision or task.
  - Keep the content focused and provide a clear primary and secondary action
    when a choice is required.
  - Make the close action visible and ensure it has an accessible name.
  - Use a modal for consequential confirmations and explain destructive
    outcomes before the user commits.
- `donts`:
  - Do not use a modal for large documents, multi-step workflows, or content
    users need to compare frequently; use a page or another non-blocking
    pattern instead.
  - Do not omit the title or description, or use vague labels such as `OK`
    when the action's result is important.
  - Do not trap users in the modal by removing every dismissal path; preserve
    Escape and an explicitly labeled close action.
  - Do not open a modal from inside another modal or stack dialogs without a
    clearly designed focus and dismissal model.
  - Do not place essential information only behind a modal or rely on the
    backdrop as the only way to close it.

Required `propsRows` items:

- `isOpen`: `boolean`
  - Controls whether the modal is rendered and visible.
- `onClose`: `() => void`
  - Called when the user presses Escape, activates the close button, or clicks
    the backdrop.
- `title`: `string`
  - Visible heading and accessible name for the dialog.
- `description`: `string`
  - Supporting description associated with the dialog through
    `aria-describedby`.
- `children`: `React.ReactNode`
  - Content rendered in the modal body, including forms, messages, and
    actions.

Implementation requirements for `components/blocks/Modal.tsx`:

- Keep the component client-side because it owns DOM event listeners, focus,
  and document scroll state.
- Render nothing when `isOpen` is `false`.
- Render a fixed, centered dialog above a full-screen backdrop using existing
  `system-*` tokens and shared utility conventions. Preserve the existing
  visual hierarchy, border, radius, shadow, and responsive width unless a
  change is needed for usability.
- Keep the dialog above the backdrop in stacking order. The backdrop must be
  hidden from assistive technology with `aria-hidden="true"` and must invoke
  `onClose` when clicked.
- Keep the close control as the existing `Button` icon button, with an
  accessible name such as `Close modal`, and preserve its keyboard behavior.
- Generate stable unique IDs per mounted modal instance for the title and
  description. Do not use hard-coded IDs that can collide when multiple modal
  instances exist. Connect them with `aria-labelledby` and
  `aria-describedby`.
- Implement a real focus lifecycle: remember the element that had focus before
  opening, focus the dialog or the first meaningful control when it opens,
  keep Tab and Shift+Tab within the dialog, and restore focus to the opener
  when it closes if that element is still connected.
- Register the Escape listener only while open and make sure cleanup occurs on
  close and unmount. Escape must call `onClose` once for the key event.
- Lock document body scrolling while open and restore the body's previous
  `overflow` value rather than always forcing `unset`, so the component does
  not overwrite an existing application scroll state.
- Avoid introducing `any`, unsupported public props, animation APIs, portal
  APIs, or nested-modal behavior that is not part of the component contract.
- Preserve the current `description: string` API and use semantic HTML for the
  heading, description, dialog, and interactive controls.

Integration requirements:

- Add the completed Modal entry to the blocks documentation registry and block
  navigation so it is reachable at `/components/blocks/modal`.
- Add a reusable Modal usage snippet in the appropriate usage-code module and
  reference it from the docs entry.
- Ensure the docs entry's `componentName` allows the generated source preview
  registry to resolve `components/blocks/Modal.tsx`.
- Run `npm run generate:component-source` after changing docs source
  references; never edit `lib/component-source.ts` manually.
- Keep the implementation and docs type-safe and aligned with the actual
  public API.

## References

- `lib/ui-docs/button.tsx` — reference documentation shape, completeness, and
  tone.
- `lib/ui-docs/card.tsx` — reference block documentation entry.
- `lib/types/docs.ts` — `UiComponentDoc` and props-table types.
- `components/blocks/Modal.tsx` — source of truth for the Modal API and visual
  structure.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered documentation
  sections.
- `components/blocks/ComponentShowcase.tsx` — showcase and source-preview
  behavior.
- `components/examples/UsageCodesBlock.tsx` — block usage snippets.
- `lib/constants.ts` — block navigation and docs section navigation.
- `lib/component-source.ts` and `scripts/generate-component-source.mjs` —
  generated component source-preview registry and its generator.

## Notes

- Modal is an interruptive pattern. Keep examples short and task-focused so
  the showcase demonstrates the interaction without obscuring the docs page.
- The current implementation already provides Escape handling, backdrop
  dismissal, body scroll locking, an initial dialog focus target, semantic
  dialog attributes, and a close button. Completing the component must also
  address focus containment, focus restoration, unique IDs, and restoration of
  the previous body overflow value.
- Do not document click-outside behavior for clicks inside the dialog,
  controlled `open`/`onOpenChange` props, portals, animation controls, size
  variants, or nested dialogs unless those APIs are explicitly implemented.
- Use existing `system-*` tokens and shared utility conventions. Do not add a
  one-off stylesheet for Modal.
- The source preview registry is generated; update it through the docs entry
  and the generator rather than editing the generated file directly.
