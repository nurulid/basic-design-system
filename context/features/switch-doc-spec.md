# Switch Component Documentation

## Overview
The Switch component is used to turn a single setting or behavior on and off, with the change taking effect immediately. The documentation should explain how `Switch` differs from a checkbox: use a switch for an immediate setting change, and use a checkbox for a selection that may be submitted with a form or combined with other independent choices.

The documentation entry for `Switch` should be as complete as `button.tsx`, while remaining accurate to the button-based switch API in `components/ui/Switch.tsx`. It should include a practical labeled preview, guidance for immediate state changes, accessibility expectations, best practices, a props table, and related components.

## Requirements
The completed documentation should:

- Follow the structure of `lib/ui-docs/button.tsx`.
- Use the existing semantic design-system tone and tokens.
- Show checked, unchecked, and disabled states in the preview.
- Explain both controlled (`checked`) and uncontrolled (`defaultChecked`) usage.
- Document that the component exposes `role="switch"` and `aria-checked` semantics.
- Make clear that every switch needs a visible label or an accessible name such as `aria-label`.
- Include practical dos and don'ts for labeling, immediate effects, state feedback, and disabled settings.
- Reflect the real `SwitchProps` API, including native button attributes and the omitted `onChange` prop.
- Include related components: `Checkbox`, `Radio`, and `Button`.

## References
- `lib/ui-docs/button.tsx` is the completeness and formatting reference.
- `lib/ui-docs/checkbox.tsx`, `lib/ui-docs/radio.tsx`, and `lib/ui-docs/input.tsx` are tone and form-control references.
- `components/ui/Switch.tsx` is the source of truth for supported behavior and props.
- `components/examples/UsageCodesUI.tsx` and `app/components/ui/page.tsx` show the current labeled switch usage.

## Notes
- Keep the documentation accurate to the implementation. Do not invent a `label`, `description`, `error`, or `onChange` prop for `Switch`.
- A switch is a button with switch semantics, so document button attributes and keyboard activation rather than native checkbox attributes.
- The preview should associate each visible label with its switch using matching `id` and `htmlFor` values.
