# Input Component Documentation

## Overview
The Input component is used to collect short, single-line information such as names, email addresses, passwords, account IDs, and search queries. In this design system, it uses a floating-label pattern, semantic token-based styling, and inline error messaging to keep forms compact, readable, and accessible.

The documentation entry for `Input` should feel equivalent in completeness to `button.tsx`. It should include:

- A concise description of what inputs are for and the kinds of data they should capture.
- A showcase preview with one standard input example and one invalid/error example.
- A `guidelines` section with `Features`, `When to use`, and `Accessibility`.
- A `dosAndDonts` section with practical guidance for writing labels, validation, and form behavior.
- A `propsRows` table that reflects the real `Input` API and the most important supported native props.
- A short list of related components.

## Requirements
The final `lib/ui-docs/input.tsx` should follow the same structural pattern as `lib/ui-docs/button.tsx`.

Required content:

- `title`: `Input`
- `description`: Explain that inputs collect short structured data and should use clear labels and helpful validation.
- `showcase`:
  - `name`: `Input`
  - `componentName`: `Input`
  - `usageCode`: `UsageCodesUI.inputUsage`
  - `preview`: show at least two examples
    - a default or standard text/email input
    - an input with an `error` message

Required `guidelines` items:

- `Features`
  - Mention floating labels.
  - Mention inline error messaging and invalid styling.
  - Mention support for native input behavior and attributes.
  - Mention consistency with the design-system spacing and tokens.
- `When to use`
  - Explain that `Input` is best for short, single-line data such as names, emails, passwords, IDs, and compact search/filter fields.
- `Accessibility`
  - Explain that labels should stay meaningful.
  - Explain that errors should be associated with the field.
  - Explain that placeholders alone should not carry critical instructions.
  - Note that keyboard focus visibility and color contrast matter.

Required `dosAndDonts` content:

- `dos`
  - Use specific labels that tell users exactly what information is expected.
  - Keep validation guidance close to the field and reveal errors clearly.
  - Choose the correct input `type` such as `email`, `password`, or `number` when appropriate.
  - Keep single-line inputs concise and move longer responses to `Textarea`.
- `donts`
  - Do not use vague labels such as `Info` or `Details`.
  - Do not rely on placeholder text alone for key instructions.
  - Do not show an error state before the user has a chance to provide input unless the flow explicitly requires it.
  - Do not use a single-line input for long-form responses.
  - Do not hide important validation rules away from the field.

Required `propsRows` items:

- `label`: `string`
  - Visible floating label and fallback placeholder text.
- `error`: `string`
  - Shows validation feedback and invalid styling when provided.
- `type`: `string`
  - Native input type such as `text`, `email`, `password`, or `number`.
- `id`: `string`
  - Optional explicit ID for label and error message association.
- `...props`: `React.InputHTMLAttributes<HTMLInputElement>`
  - Native attributes like `required`, `disabled`, `autoComplete`, `defaultValue`, and `name`.

Required `relatedComponents`:

- `Textarea`
- `Select`
- `Checkbox`

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `components/ui/Input.tsx` as the source of truth for the real component API.
- The component styling behavior is shared through `lib/ui/fieldStyles.ts`.
- The docs renderer supports `dosAndDonts`, so the `Input` doc should populate that section instead of leaving it empty.

## Notes
- Keep the wording aligned with the current semantic design-system tone rather than product-marketing language.
- Stay accurate to the implementation: `Input` explicitly supports `label`, optional `error`, and native input props.
- Do not invent unsupported custom props.
- It is acceptable for the `dosAndDonts` entries to be text-only if there are no existing input-specific preview components to reuse.
