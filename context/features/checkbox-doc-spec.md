# Checkbox Component Documentation

## Overview
The Checkbox component is used for binary selections where users can opt in, opt out, or choose multiple independent options. In this design system, `Checkbox` supports an optional label and description, while `CheckboxGroup` provides a semantic fieldset and legend for grouped choices.

The documentation entry for `Checkbox` should feel equivalent in completeness to `button.tsx`, `input.tsx`, and `textarea.tsx`. It should include:

- A concise description of what checkboxes are for and when they should be used instead of radios or switches.
- A showcase preview that reflects the current grouped usage pattern in the repo.
- A `guidelines` section with `Features`, `When to use`, and `Accessibility`.
- A `dosAndDonts` section with practical guidance for labels, descriptions, grouping, and selection behavior.
- A `propsRows` table that reflects the real `Checkbox` and `CheckboxGroup` APIs and the most important supported native props.
- A short list of related components.

## Requirements
The final `lib/ui-docs/checkbox.tsx` should follow the same structural pattern as `lib/ui-docs/button.tsx`.

Required content:

- `title`: `Checkbox`
- `description`: Explain that checkboxes support single yes/no choices and multiple independent selections, and that clear labels help users understand the consequence of each option.
- `showcase`:
  - `name`: `Checkbox`
  - `componentName`: `Checkbox`
  - `usageCode`: `UsageCodesUI.checkboxUsage`
  - `preview`: show at least one grouped example using `CheckboxGroup`
    - one default checkbox option
    - one checked option
    - one disabled option
    - at least one checkbox with `description` so the docs expose that part of the API

Required `guidelines` items:

- `Features`
  - Mention support for optional labels and supporting descriptions.
  - Mention grouped usage through `CheckboxGroup` with a semantic `fieldset` and `legend`.
  - Mention visible checked, focus, and disabled states using semantic design tokens.
  - Mention support for standard native checkbox behavior and attributes.
- `When to use`
  - Explain that `Checkbox` is best for independent choices, optional preferences, acknowledgements, filters, and settings where more than one item may be selected.
  - Clarify that radios are better when users must choose exactly one option from a set.
- `Accessibility`
  - Explain that each checkbox needs a clear label.
  - Explain that related checkboxes should be grouped with a legend when presented as one question or category.
  - Explain that descriptions should remain associated with the checkbox.
  - Note that keyboard focus visibility, touch target clarity, and contrast matter.

Required `dosAndDonts` content:

- `dos`
  - Use labels that describe the exact choice or commitment being made.
  - Use `description` for optional clarification when the label alone is not enough.
  - Group related checkboxes with `CheckboxGroup` and a meaningful `legend`.
  - Use checkboxes only when options are independent and multiple selections are valid.
- `donts`
  - Do not use vague labels such as `Option 1` without context.
  - Do not present mutually exclusive choices as checkboxes.
  - Do not rely on surrounding layout alone to explain what a checkbox controls.
  - Do not hide important consequences or requirements away from the checkbox label or description.
  - Do not disable options without giving users enough context when the reason affects completion.

Required `propsRows` items:

- `label`: `React.ReactNode`
  - Optional visible label associated with the checkbox input.
- `description`: `React.ReactNode`
  - Optional supporting text rendered below the label and connected with `aria-describedby`.
- `id`: `string`
  - Optional explicit ID for label and description association; otherwise generated internally.
- `legend`: `React.ReactNode`
  - Required `CheckboxGroup` legend for grouped checkbox sets.
- `...props`: `React.InputHTMLAttributes<HTMLInputElement>`
  - Native checkbox attributes such as `checked`, `defaultChecked`, `disabled`, `required`, `name`, `value`, and `onChange`.
- `...props (group)`: `React.FieldsetHTMLAttributes<HTMLFieldSetElement>`
  - Native fieldset attributes for grouped checkbox layouts.

Required `relatedComponents`:

- `Radio`
- `Switch`
- `Input`

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `lib/ui-docs/input.tsx` and `lib/ui-docs/textarea.tsx` as the closest tone and structure references for form controls.
- Use `components/ui/Checkbox.tsx` as the source of truth for the real component API.
- Use `components/examples/UsageCodesUI.tsx` and `app/components/ui/page.tsx` as references for the current grouped checkbox showcase pattern.

## Notes
- Keep the wording aligned with the current semantic design-system tone rather than product-marketing language.
- Stay accurate to the implementation: `Checkbox` supports `label`, optional `description`, native checkbox props, and auto-generated IDs; `CheckboxGroup` supports a required `legend` plus native fieldset props.
- Do not invent unsupported props such as a custom `error` state or validation UI that does not exist in `Checkbox.tsx`.
- Because the repository currently showcases checkbox usage as a group, the docs preview should lean into grouped examples instead of a floating single-control card.
