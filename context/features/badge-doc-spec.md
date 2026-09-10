# Badge Component Documentation

## Overview

Create a documentation page for the `Badge` pattern at
`/components/blocks/badge`. The page should follow the structure and level of
detail used by `lib/ui-docs/button.tsx`, while documenting the API and behavior
that already exists in `components/patterns/Badge.tsx`.

Badges are compact, non-interactive labels used to classify content, show
status, or communicate a short piece of metadata. They should be concise and
should not be used as a replacement for a button, link, alert, or tooltip.

## Requirements

- Add a reusable `badgeUsage` example to `components/examples/UsageCodesBlock.tsx`.
- Add `lib/ui-docs/badge.tsx` exporting a `badgeDoc: UiComponentDoc` with a
  showcase, guidelines, best practices, props API, and related components.
- Cover the default, secondary, destructive, outline, success, warning, and
  info variants in the showcase.
- Register `badgeDoc` in `lib/ui-docs/index.ts` as a block component.
- Add Badge to the Blocks & Sections sidebar navigation in `lib/constants.ts`.
- Set `showcase.componentName` to `Badge` so the source-preview generator
  resolves `components/patterns/Badge.tsx`.
- Keep the documentation aligned with the current implementation: `Badge`
  renders a `div`, defaults to the `default` variant, supports the seven
  listed variants, and accepts native `HTMLDivElement` attributes.
- Regenerate `lib/component-source.ts` after adding the documentation. Do not
  edit the generated file manually.

## References

- `components/patterns/Badge.tsx`
- `lib/ui-docs/button.tsx`
- `lib/ui-docs/alert.tsx`
- `components/examples/UsageCodesBlock.tsx`
- `lib/ui-docs/index.ts`
- `lib/constants.ts`

## Notes

- Badge is non-interactive. If the label needs to perform an action, use a
  Button or Link instead.
- Variant colors communicate meaning only when the label also provides clear
  text; do not rely on color alone.
- The docs should not claim keyboard interaction, live-region behavior,
  forwarded refs, or a dedicated size API because the current component does
  not implement those features.
