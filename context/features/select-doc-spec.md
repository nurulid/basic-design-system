# Select Component Documentation

## Overview
`Select` lets users choose one value from a list of predefined options. It is intended for compact forms and settings where showing every option at once would take too much space. The component should provide a trigger, a listbox, a selected value display, and selectable items while preserving the design system's semantic tokens and accessible interaction model.

The documentation entry should be as complete as `lib/ui-docs/button.tsx` and should demonstrate a default select, a preselected value, and a disabled option.

## Requirements
- Follow the structure used by the Button documentation: `title`, `description`, `showcase`, `guidelines`, `dosAndDonts`, `propsRows`, and `relatedComponents`.
- Document the compound API: `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, and `SelectItem`.
- Support controlled usage with `value` and `onValueChange`, plus uncontrolled usage with `defaultValue`.
- The trigger must expose combobox semantics and `aria-expanded`; the content must expose listbox semantics and each item must expose option semantics with `aria-selected`.
- Support mouse selection, outside-click dismissal, Escape to close, and keyboard navigation with Arrow Up/Down, Home, End, Enter, and Space.
- Support disabled triggers and disabled items. Disabled items must not be selectable or keyboard-highlighted.
- Show the selected option label in `SelectValue`; show `placeholder` when no option is selected.
- Keep styling aligned with `styles/globals.css` semantic tokens and support `className`/native HTML attributes on compound parts where applicable.
- Keep the existing `UsageCodesUI.selectUsage` example accurate and register the completed Select doc in `lib/ui-docs/index.ts` so `/components/ui/select` resolves.

Required `guidelines` topics:
- `Features`: controlled and uncontrolled state, keyboard support, selected-state indicator, disabled options, and semantic token styling.
- `When to use`: one choice from a short-to-medium list, especially in compact forms or settings; use Radio when comparing all choices at once matters.
- `Accessibility`: meaningful trigger text, visible focus, combobox/listbox/option semantics, keyboard operation, and sufficient contrast.

Required `dosAndDonts` topics:
- `dos`: use a concise label or placeholder, order options logically, provide a useful default when appropriate, and use Radio for short lists where comparison is important.
- `donts`: do not use Select for multi-selection, hide critical instructions in the placeholder, present an unnecessarily long list, or leave the trigger without an accessible name.

Required `propsRows` items:
- `Select`: `value`, `defaultValue`, `onValueChange`, and `children`.
- `SelectTrigger`: native button attributes such as `disabled`, `id`, `aria-label`, and `className`.
- `SelectValue`: `placeholder`.
- `SelectContent`: native div attributes such as `className`.
- `SelectItem`: `value`, `disabled`, children, and native div attributes.

Required `relatedComponents`: `Input`, `Radio`, and `Checkbox`.

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `components/ui/Select.tsx` as the source of truth for the real compound component API.
- Use `components/examples/UsageCodesUI.tsx` for the source preview code.

## Notes
- Keep the wording aligned with the semantic design-system tone rather than product-marketing language.
- Do not invent multi-select, searchable, async-loading, or form-hidden-input behavior that is not implemented.
- `SelectItem` uses a `div` with option semantics, so keyboard focus remains on the trigger and the active option is conveyed with `aria-activedescendant`.
