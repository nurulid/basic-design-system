# Breadcrumb Component Documentation

## Overview

Breadcrumbs show the user's current location within a hierarchical structure and provide links back to higher-level pages. The component is a composable block made from a labelled navigation landmark, an ordered list, breadcrumb items, links, a current-page indicator, and separators.

The documentation should present a realistic page path, explain the semantic roles of each subcomponent, and show how to use the component with both the default chevron separator and a custom separator.

## Requirements

- Document the component as a block named `Breadcrumb` at `/components/blocks/breadcrumb`.
- Include a preview with `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, and `BreadcrumbSeparator`.
- Use an ordered list for the hierarchy and links for every ancestor page.
- Mark only the current page with `BreadcrumbPage`, including `aria-current="page"` and a non-interactive presentation.
- Keep the navigation landmark labelled as `breadcrumb` by default while allowing native navigation props to be passed through.
- Use the default chevron separator and demonstrate a custom separator through `BreadcrumbSeparator` children.
- Preserve forwarded refs and native HTML attributes on all ref-forwarding primitives.
- Support responsive wrapping and semantic system-token styling without requiring consumer CSS.
- Explain keyboard navigation, focus visibility, screen-reader semantics, and the need for meaningful link labels.
- Include best practices for concise paths, avoiding links for the current page, handling long paths, and choosing separators that communicate hierarchy without becoming content.
- Document the props for the root and each exported subcomponent.
- List related components such as `Link Button`, `Card`, and `Sidebar`.

## References

- `components/blocks/Breadcrumb.tsx`
- `lib/ui-docs/button.tsx`
- `components/examples/UsageCodesBlock.tsx`
- `components/blocks/UiComponentDocsTemplate.tsx`
- `lib/constants.ts`

## Notes

- Keep the component source in `components/blocks/Breadcrumb.tsx`; do not edit generated `lib/component-source.ts` by hand.
- Add the documentation data to `lib/ui-docs/breadcrumb.tsx` and register it in `lib/ui-docs/index.ts`.
- Regenerate the component source registry after adding the `componentName: "Breadcrumb"` documentation entry.
