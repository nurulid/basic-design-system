# Avatar Component Documentation

## Overview

Avatar is a compact visual representation of a person or account. It should
show a supplied image when one is available, display a short fallback such as
initials when the image is missing or fails to load, and provide a neutral user
icon when no fallback is supplied. The component is a presentational block,
not an interactive control, and should preserve the design system's semantic
tokens, consistent sizing, and native `div` attributes.

The documentation entry should be as complete as `lib/ui-docs/button.tsx`,
while explaining the difference between image content, initials fallback, and
the neutral placeholder state.

## Requirements

The final `lib/ui-docs/avatar.tsx` should follow the same `UiComponentDoc`
structure as `lib/ui-docs/button.tsx`.

Required content:

- `title`: `Avatar`
- `description`: Explain that avatars identify a person or account through an
  image, initials, or a neutral placeholder, and that they should remain
  concise and supplementary to the person's visible name or accessible label.
- `showcase`:
  - `name`: `Avatar`
  - `componentName`: `Avatar`
  - `usageCode`: an avatar usage example from the appropriate usage-code
    module.
  - `preview`: show all of the important states and sizes:
    - an image avatar;
    - an initials fallback;
    - a neutral user-icon fallback;
    - small, medium, and large sizes;
    - an image-loading or image-error example when it can be demonstrated
      reliably without depending on an external service.

Required `guidelines` items:

- `Features`
  - Mention image rendering with `src` and `alt`.
  - Mention the initials fallback from `fallback` when `src` is absent or the
    image cannot be loaded.
  - Mention the neutral user icon when neither an image nor fallback text is
    available.
  - Mention `sm`, `md`, and `lg` sizes, forwarded refs, native `div`
    attributes, `className` overrides, and semantic design-system tokens.
  - Mention the loading indicator and graceful image-error handling.
- `When to use`
  - Explain that Avatar is best for user identity in account menus, comments,
    activity feeds, team lists, participant lists, and compact profile
    summaries.
  - Explain that the surrounding UI should provide the person's name or
    account context when identity is important; an avatar alone should not be
    expected to communicate detailed identity.
  - Clarify that Avatar should not be used as a replacement for a button,
    link, or other interactive control.
- `Accessibility`
  - Explain that meaningful image avatars need descriptive `alt` text, while
    decorative images should use an empty `alt` value when the surrounding
    text already identifies the person.
  - Explain that initials are only a visual fallback and should be paired with
    an accessible name through native attributes such as `aria-label` when no
    adjacent visible name is available.
  - Note that the component must remain presentational and must not introduce
    interactive roles or keyboard behavior by itself.
  - Require sufficient contrast for fallback text and the neutral icon, and
    advise against using color alone to distinguish people or statuses.

Required `dosAndDonts` content:

- `dos`
  - Provide meaningful `alt` text when the image conveys identity.
  - Use a short, recognizable fallback such as the person's initials.
  - Keep avatar sizes consistent within the same list, table, or navigation
    pattern.
  - Pair the avatar with a visible name or accessible label when identity is
    not otherwise clear.
- `donts`
  - Do not use an avatar as the only source of a person's name or account
    identity.
  - Do not use long fallback text that becomes truncated or difficult to read.
  - Do not imply status, verification, or availability through avatar color
    alone.
  - Do not make an avatar interactive without wrapping it in an appropriately
    labeled button or link.
  - Do not rely on a remote image always loading; provide a fallback or allow
    the neutral placeholder state.

Required `propsRows` items:

- `src`: `string`
  - Optional image source. When omitted, or when the image fails to load, the
    component displays `fallback` or the neutral user icon.
- `alt`: `string`
  - Alternative text passed to the avatar image; defaults to `Avatar`.
- `fallback`: `string`
  - Optional fallback text, rendered as up to the first two uppercase
    characters when no usable image is available.
- `size`: `'sm' | 'md' | 'lg'`
  - Controls the avatar dimensions and fallback/icon scale; defaults to `md`.
- `className`: `string`
  - Adds or overrides utility classes on the avatar container.
- `...props`: `React.HTMLAttributes<HTMLDivElement>`
  - Native container attributes such as `id`, `aria-*`, `data-*`, event
    handlers, and other standard `div` props.

Required `relatedComponents`:

- `Card`
- `Tooltip`
- `Button`

## References

- `lib/ui-docs/button.tsx` — reference documentation shape, completeness, and
  tone.
- `lib/types/docs.ts` — `UiComponentDoc` and props table types.
- `components/patterns/Avatar.tsx` — source of truth for the Avatar API,
  fallback states, sizes, and image-loading behavior.
- `components/blocks/UiComponentDocsTemplate.tsx` — rendered documentation
  sections.
- `components/blocks/ComponentShowcase.tsx` — showcase and source-preview
  behavior.
- `components/examples/UsageCodesBlock.tsx` — appropriate location for the
  Avatar usage snippet if it is documented as a block.
- `lib/constants.ts` — blocks navigation and docs section navigation.

## Notes

- Add Avatar to the blocks documentation registry and blocks navigation so it
  is reachable at `/components/blocks/avatar`.
- The source preview registry is generated. Add the `componentName` reference
  through the Avatar docs entry and run `npm run generate:component-source`; do
  not edit `lib/component-source.ts` manually.
- Keep wording aligned with the current semantic design-system tone and use
  existing `system-*` tokens. Do not add one-off component CSS.
- Stay accurate to the implementation: Avatar currently supports only the
  documented `sm`, `md`, and `lg` sizes and has no built-in badge, status,
  presence, click, or group props.
- The implementation is client-side because it owns image loading and error
  state. Loading should resolve on successful image load, and image errors
  should transition cleanly to the documented fallback without leaving a
  spinner visible.
- Do not make the documentation depend on a particular external image host;
  use a stable local or otherwise reliable preview asset when available.
