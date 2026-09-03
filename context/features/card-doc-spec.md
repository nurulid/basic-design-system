# Card Component Documentation

## Overview

The Card component is a compositional surface for grouping related content,
metadata, controls, or actions into a distinct section of a page. It provides
an accessible semantic container option and a consistent structure through
`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.

The documentation entry for `Card` should feel equivalent in completeness to
`button.tsx` while explaining that Card is a layout and composition block,
not an interactive control. It should demonstrate the complete header,
content, and footer composition used by the existing blocks showcase.

## Requirements

The final `lib/ui-docs/card.tsx` should follow the same structural pattern as
`lib/ui-docs/button.tsx`.

Required content:

- `title`: `Card`
- `description`: Explain that cards group related content and actions into a
  clear, reusable surface.
- `showcase`:
  - `name`: `Card`
  - `componentName`: `Card`
  - `usageCode`: `UsageCodesBlock.cardUsage`
  - `preview`: show a complete card using `CardHeader`, `CardTitle`,
    `CardDescription`, `CardContent`, and `CardFooter`, including a form
    control and actions.

Required `guidelines` items:

- `Features`
  - Mention the semantic `as` options: `div`, `article`, and `section`.
  - Mention the compositional subcomponents for header, title, description,
    content, and footer regions.
  - Mention forwarded refs, native HTML attributes, className overrides, and
    semantic design-system tokens.
- `When to use`
  - Explain that Card is best for related content, forms, settings, previews,
    summaries, and grouped actions that benefit from visual separation.
  - Clarify that cards should not be used to wrap every small piece of
    content or to imply interactivity without an actual interactive element.
- `Accessibility`
  - Explain that the `as` element should match the content's semantics.
  - Explain that titles should provide a meaningful heading when the card is a
    distinct section.
  - Note that interactive controls inside a card still need their own labels,
    focus styles, and keyboard behavior.

Required `dosAndDonts` content:

- `dos`
  - Group related information and actions with a clear purpose.
  - Use `CardHeader` and `CardTitle` to establish a meaningful heading.
  - Use `CardDescription` for concise supporting context.
  - Use `CardFooter` for secondary metadata or actions that belong to the
    card.
- `donts`
  - Do not put unrelated content into the same card.
  - Do not use a card's visual container as a substitute for a button or link.
  - Do not omit a meaningful heading when the card represents a distinct
    section.
  - Do not nest cards repeatedly without a clear hierarchy.
  - Do not use the wrong semantic `as` element for the content.

Required `propsRows` items:

- `as`: `'div' | 'article' | 'section'`
  - Selects the semantic HTML element used for the Card container; defaults to
    `div`.
- `className`: `string`
  - Adds or overrides utility classes on the Card container.
- `...props`: `React.HTMLAttributes<HTMLElement>`
  - Native container attributes such as `id`, `role`, `aria-*`, and event
    handlers.
- `CardHeader`: `React.HTMLAttributes<HTMLDivElement>`
  - Header region props, including className and native div attributes.
- `CardTitle`: `React.HTMLAttributes<HTMLHeadingElement>`
  - Heading props for the card title.
- `CardDescription`: `React.HTMLAttributes<HTMLParagraphElement>`
  - Supporting description props for the card description.
- `CardContent`: `React.HTMLAttributes<HTMLDivElement>`
  - Main content region props.
- `CardFooter`: `React.HTMLAttributes<HTMLDivElement>`
  - Footer region props for metadata and actions.

Required `relatedComponents`:

- `Button`
- `Input`
- `Tabs`

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `components/blocks/Card.tsx` as the source of truth for the Card API and
  default composition styles.
- Use `components/examples/UsageCodesBlock.tsx` and
  `app/components/blocks/page.tsx` as references for the current Card
  showcase.

## Notes
- Keep the wording aligned with the current semantic design-system tone rather
  than product-marketing language.
- Stay accurate to the implementation: Card supports only `div`, `article`,
  and `section` through `as`; the supporting components use native HTML props.
- Do not invent interactive Card props, click behavior, variants, or elevation
  controls that do not exist in `Card.tsx`.
- Keep the Card docs in the blocks category even though the shared docs
  template is reused by the UI component docs route.
