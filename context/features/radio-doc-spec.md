# Radio Component Documentation

## Overview
The Radio component is used when users must choose exactly one option from a defined set. In this design system, `Radio` supports an optional label and description, while `RadioGroup` provides a semantic fieldset, legend, and shared group name for mutually exclusive choices.

The documentation entry for `Radio` should feel equivalent in completeness to `button.tsx`, `input.tsx`, `textarea.tsx`, and the checkbox documentation. It should include:

- A concise description of what radios are for and when they should be used instead of checkboxes or switches.
- A showcase preview that reflects the current grouped usage pattern in the repo.
- A `guidelines` section with `Features`, `When to use`, and `Accessibility`.
- A `dosAndDonts` section with practical guidance for labels, descriptions, grouping, and exclusive-choice behavior.
- A `propsRows` table that reflects the real `Radio` and `RadioGroup` APIs and the most important supported native props.
- A short list of related components.

## Requirements
The final `lib/ui-docs/radio.tsx` should follow the same structural pattern as `lib/ui-docs/button.tsx`.

Required content:

- `title`: `Radio`
- `description`: Explain that radios are for selecting one option from a small set of mutually exclusive choices, and that clear labels help users compare options confidently.
- `showcase`:
  - `name`: `Radio`
  - `componentName`: `Radio`
  - `usageCode`: `UsageCodesUI.radioUsage`
  - `preview`: show at least one grouped example using `RadioGroup`
    - one default option
    - one secondary or alternative option
    - one disabled option
    - at least one radio with `description` so the docs expose that part of the API

Required `guidelines` items:

- `Features`
  - Mention support for optional labels and supporting descriptions.
  - Mention grouped usage through `RadioGroup` with a semantic `fieldset` and `legend`.
  - Mention shared group naming, whether passed explicitly or inherited from `RadioGroup`.
  - Mention visible selected, focus, and disabled states using semantic design tokens.
  - Mention support for standard native radio behavior and attributes.
- `When to use`
  - Explain that `Radio` is best when users must choose one option from a defined list such as delivery method, plan tier, or display preference.
  - Clarify that checkboxes are better when multiple selections are allowed.
- `Accessibility`
  - Explain that each radio needs a clear label.
  - Explain that related radios should be grouped with a legend when presented as one question or category.
  - Explain that descriptions should remain associated with the radio.
  - Note that keyboard focus visibility, arrow-key navigation expectations, and contrast matter.

Required `dosAndDonts` content:

- `dos`
  - Use labels that make each option distinct and easy to compare.
  - Use `description` for optional clarification when option details or consequences need more context.
  - Group related radios with `RadioGroup` and a meaningful `legend`.
  - Use radios only when exactly one option can be selected at a time.
- `donts`
  - Do not use vague labels such as `Option A` without meaningful context.
  - Do not use radios for independent choices where users may need multiple selections.
  - Do not rely on layout alone to communicate which radios belong to the same question.
  - Do not hide important tradeoffs or option details away from the radio label or description.
  - Do not present too many options when another control such as `Select` would make comparison easier.

Required `propsRows` items:

- `label`: `React.ReactNode`
  - Optional visible label associated with the radio input.
- `description`: `React.ReactNode`
  - Optional supporting text rendered below the label and connected with `aria-describedby`.
- `id`: `string`
  - Optional explicit ID for label and description association; otherwise generated internally.
- `name`: `string`
  - Optional radio name; individual radios inherit the shared name from `RadioGroup` when one is not passed directly.
- `legend`: `React.ReactNode`
  - Required `RadioGroup` legend for grouped radio sets.
- `...props`: `React.InputHTMLAttributes<HTMLInputElement>`
  - Native radio attributes such as `checked`, `defaultChecked`, `disabled`, `required`, `value`, and `onChange`.
- `...props (group)`: `React.FieldsetHTMLAttributes<HTMLFieldSetElement>`
  - Native fieldset attributes for grouped radio layouts.

Required `relatedComponents`:

- `Checkbox`
- `Switch`
- `Select`

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `lib/ui-docs/input.tsx`, `lib/ui-docs/textarea.tsx`, and the checkbox documentation spec as the closest tone and structure references for form controls.
- Use `components/ui/Radio.tsx` as the source of truth for the real component API.
- Use `components/examples/UsageCodesUI.tsx` and `app/components/ui/page.tsx` as references for the current grouped radio showcase pattern.

## Notes
- Keep the wording aligned with the current semantic design-system tone rather than product-marketing language.
- Stay accurate to the implementation: `Radio` supports `label`, optional `description`, optional `name`, native radio props, and auto-generated IDs; `RadioGroup` supports a required `legend`, an optional shared `name`, and native fieldset props.
- Do not invent unsupported props such as a custom `error` state or validation UI that does not exist in `Radio.tsx`.
- Because the repository currently showcases radio usage as a group, the docs preview should lean into grouped examples instead of a floating single-control card.
