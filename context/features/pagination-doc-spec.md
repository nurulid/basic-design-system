# Pagination Component Documentation

## Overview

Pagination provides a compact, keyboard-friendly way to move through a finite
set of pages. The component is a composable block made from a labelled
navigation landmark, a list of page controls, previous and next links, and an
ellipsis indicator for omitted page ranges.

## Requirements

- Document the component as a block named `Pagination` at `/components/blocks/pagination`.
- Include a preview with `Pagination`, `PaginationContent`, `PaginationItem`,
  `PaginationLink`, `PaginationPrevious`, `PaginationNext`, and
  `PaginationEllipsis`.
- Use links for navigable pages and mark the current page with
  `aria-current="page"` through `PaginationLink isActive`.
- Keep the root navigation landmark labelled as `pagination` by default while
  allowing native navigation props to be passed through.
- Provide descriptive accessible names for previous, next, and ellipsis
  controls while keeping their visual labels concise.
- Preserve forwarded refs and native HTML attributes on all ref-forwarding
  primitives.
- Reuse the shared `Button` variants and sizes so pagination controls match the
  design system's interaction, focus, and disabled-state styling.
- Explain keyboard navigation, focus visibility, screen-reader semantics, and
  the need for meaningful page destinations.
- Include best practices for showing the current page, disabling or omitting
  unavailable previous/next actions, using ellipses for long ranges, and
  avoiding excessive page controls.
- Document the props for the root and each exported subcomponent.
- List related components such as `Breadcrumb`, `Button`, and `Tabs`.

## References

- `components/blocks/Pagination.tsx`
- `lib/ui-docs/button.tsx`
- `components/examples/UsageCodesBlock.tsx`
- `components/blocks/UiComponentDocsTemplate.tsx`
- `lib/constants.ts`

## Notes

- Keep the component source in `components/blocks/Pagination.tsx`; do not edit
  generated `lib/component-source.ts` by hand.
- Add the documentation data to `lib/ui-docs/pagination.tsx` and register it
  in `lib/ui-docs/index.ts`.
- Add the reusable code sample to `components/examples/UsageCodesBlock.tsx`.
- Add Pagination to the blocks navigation and regenerate the component source
  registry after adding the `componentName: "Pagination"` documentation entry.
