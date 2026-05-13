# Textarea Component Documentation

## Overview
The Textarea component is used for multi-line user input such as messages, notes, descriptions, feedback, and other content that needs more vertical space than a single-line field. In this design system, it follows the same floating-label pattern and semantic token styling as `Input`, while supporting inline validation feedback for longer-form entry.

The documentation entry for `Textarea` should feel equivalent in completeness to `button.tsx`. It should include:

- A concise description of what textareas are for and when they should be preferred over single-line inputs.
- A showcase preview with one standard textarea example and one invalid/error example.
- A `guidelines` section with `Features`, `When to use`, and `Accessibility`.
- A `dosAndDonts` section with practical guidance for labels, validation, and long-form text entry.
- A `propsRows` table that reflects the real `Textarea` API and the most important supported native props.
- A short list of related components.



## Requirements
The final `lib/ui-docs/textarea.tsx` should follow the same structural pattern as `lib/ui-docs/button.tsx`.

Required content:

- `title`: `Textarea`
- `description`: Explain that textareas collect longer, multi-line responses and should use clear labels with helpful validation.
- `showcase`:
  - `name`: `Textarea`
  - `componentName`: `Textarea`
  - `usageCode`: `UsageCodesUI.textareaUsage`
  - `preview`: show at least two examples
    - a default or standard textarea
    - a textarea with an `error` message

Required `guidelines` items:

- `Features`
  - Mention floating labels.
  - Mention inline error messaging and invalid styling.
  - Mention support for native textarea behavior such as resizing and standard attributes.
  - Mention consistency with the design-system spacing and tokens.
- `When to use`
  - Explain that `Textarea` is best for longer, multi-line content such as comments, messages, bios, notes, and descriptions.
- `Accessibility`
  - Explain that labels should stay meaningful.
  - Explain that errors should be associated with the field.
  - Explain that placeholder text alone should not hold essential instructions.
  - Note that keyboard focus visibility, resize behavior, and color contrast matter.

Required `dosAndDonts` content:

- `dos`
  - Use clear labels that describe the kind of response expected.
  - Keep validation guidance close to the field and reveal errors clearly.
  - Use `Textarea` when users need room for full sentences, notes, or explanations.
  - Allow enough visible height for the expected amount of content.
- `donts`
  - Do not use vague labels such as `Details` when more specific wording is possible.
  - Do not rely on placeholder text alone for important instructions.
  - Do not collapse long-form responses into a single-line input.
  - Do not show an error state before the user has a fair chance to respond unless the flow explicitly requires it.
  - Do not make the field so small that writing or reviewing content becomes difficult.

Required `propsRows` items:

- `label`: `string`
  - Visible floating label and fallback placeholder text.
- `error`: `string`
  - Shows validation feedback and invalid styling when provided.
- `id`: `string`
  - Optional explicit ID for label and error message association.
- `rows`: `number`
  - Native textarea sizing control for visible line count when needed.
- `...props`: `React.TextareaHTMLAttributes<HTMLTextAreaElement>`
  - Native attributes like `required`, `disabled`, `defaultValue`, `name`, `maxLength`, and standard textarea behavior.

Required `relatedComponents`:

- `Input`
- `Select`
- `Form Field`



## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `lib/ui-docs/input.tsx` as the closest field-based documentation reference for tone and structure.
- Use `components/ui/Textarea.tsx` as the source of truth for the real component API.
- The shared floating-field styling behavior comes from `lib/ui/fieldStyles.ts`.
- The docs renderer supports `dosAndDonts`, so the `Textarea` doc should populate that section instead of leaving it empty.



## Notes
- Keep the wording aligned with the current semantic design-system tone rather than product-marketing language.
- Stay accurate to the implementation: `Textarea` explicitly supports `label`, optional `error`, and native textarea props.
- Do not invent unsupported custom props.
- It is acceptable for the `dosAndDonts` entries to be text-only if there are no existing textarea-specific preview components to reuse.
