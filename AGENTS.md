# Basic Design System

This repository is a small component-library and documentation site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. It is not just a collection of UI primitives: it also includes a docs experience for browsing components, previewing them, and showing their source/usage examples.

The current visual direction is a semantic design system with named tokens such as `system-base`, `system-card`, `system-border`, `system-heading`, and status colors like `system-error`, `system-success`, `system-info`, and `system-warning`. Styling is centered around reusable tokens and shared utility patterns rather than one-off component CSS.

## Project Overview

- The homepage at `app/page.tsx` introduces the design system and showcases featured components.
- The `/components` section is the main docs area and uses a sidebar layout with category navigation.
- The `components/ui` folder contains the reusable primitives such as `Button`, `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `Select`, and `Tabs`.
- The `components/blocks` folder contains larger documentation or composition-oriented building blocks such as `Card`, `Sidebar`, docs page primitives, and showcase wrappers.
- The `lib/ui-docs` folder defines structured documentation data for component detail pages. The dynamic route `app/components/ui/[slug]/page.tsx` reads from this registry and renders the shared `UiComponentDocsTemplate`.
- The site includes source code previews for documented components through the generated file `lib/component-source.ts`.

## Important Architecture Notes

- `lib/component-source.ts` is generated. Do not edit it manually.
- `scripts/generate-component-source.mjs` scans the app and docs files for `componentName` references, finds the matching component source files, and writes the registry used by `ComponentShowcase`.
- `npm run dev` automatically runs the source generator before starting Next.js.
- Shared floating field styling for `Input` and `Textarea` is centralized in `lib/ui/fieldStyles.ts`. Prefer updating the shared styles there instead of duplicating input/textarea styling in each component.
- Navigation config for the docs experience lives in `lib/constants.ts`.
- Global design tokens and theme variables live in `styles/globals.css`.

## Key Files

Read the following to get the full context of the project:

- `package.json`
- `app/page.tsx`
- `app/components/layout.tsx`
- `app/components/ui/page.tsx`
- `app/components/ui/[slug]/page.tsx`
- `components/blocks/UiComponentDocsTemplate.tsx`
- `components/blocks/ComponentShowcase.tsx`
- `lib/constants.ts`
- `lib/ui-docs/index.ts`
- `lib/ui/fieldStyles.ts`
- `lib/component-source.ts`
- `scripts/generate-component-source.mjs`
- `styles/globals.css`

## Commands

- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Production server**: `npm run start`
- **Lint**: `npm run lint`
- **Cloudflare/OpenNext build**: `npm run build:cf`
- **Regenerate source preview registry**: `npm run generate:component-source`

## Working Conventions

- Treat this repo as a docs-driven design system. Changes to components often need matching updates to showcase examples or `lib/ui-docs/*`.
- If a documented component is added, renamed, or moved, make sure the source preview generator can still resolve it.
- Keep styling aligned with the existing semantic token system in `styles/globals.css`.
- Prefer updating shared layout or docs primitives when a change should affect multiple docs pages consistently.

**IMPORTANT:** Do not add Claude to any commit messages
