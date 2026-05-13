# Home Page Specification

## Overview
The homepage at `app/page.tsx` is currently very minimal. It introduces the project with a heading and short description, then jumps directly into a single `Button` showcase. That is enough to prove the routing and preview system work, but it does not yet function as a strong landing page for a docs-driven design system.

The new homepage should act as the front door to the project. It should explain what the design system is, establish the visual language, highlight the most important component categories, and direct users into the `/components` documentation experience. It should feel consistent with the current semantic token system and existing docs surfaces rather than like a separate marketing site.

The final page should feel like a curated overview of the system, not a duplicate of `/components/ui`. It should summarize the library and create orientation, while the deeper docs pages continue to hold full previews, props tables, and usage guidance.

## Goals
- Present `Basic Design System` as a semantic, reusable component library with documentation-first navigation.
- Use the homepage to orient first-time visitors before they enter the detailed component docs.
- Reuse the existing visual language: `system-base`, `system-card`, `system-border`, `system-heading`, `system-text`, `system-comment`, and status tokens.
- Highlight the difference between the homepage and `/components/ui`: homepage is an overview and discovery surface, docs pages are the implementation reference.
- Keep the experience responsive and readable on mobile and desktop inside the existing `DefaultLayout`.

## Non-Goals
- Do not turn the homepage into a generic SaaS marketing page.
- Do not duplicate every full showcase that already exists in `app/components/ui/page.tsx`.
- Do not introduce a separate design language, one-off color palette, or hero section that conflicts with `styles/globals.css`.
- Do not require manual edits to `lib/component-source.ts`.

## Requirements
The final homepage implementation should primarily update `app/page.tsx`. If the page becomes too large, extract homepage-specific sections into reusable blocks under `components/blocks`, but keep the page architecture simple and consistent with the rest of the repo.

Required high-level structure:

- `Hero`
- `System principles / value summary`
- `Featured component categories`
- `Live preview strip or curated component preview section`
- `Documentation pathways / next steps`

The page should preserve generous spacing similar to the rest of the site and continue using a top-level `main` container with vertical rhythm comparable to the current `space-y-24` pattern.

## Page Sections

### 1. Hero
The hero should establish the project identity immediately.

Required content:

- Primary heading: `Basic Design System`
- Supporting copy that explains the project as a semantic design system and component documentation site built around reusable tokens and practical UI primitives.
- Two primary navigation actions:
  - a primary CTA linking to `/components/ui`
  - a secondary CTA linking to `/components/blocks`
- One compact supporting line or metadata row that references the current stack:
  - `Next.js 16`
  - `React 19`
  - `TypeScript`
  - `Tailwind CSS v4`

Layout expectations:

- The hero should be two-column on larger screens when useful, but collapse to one column on mobile.
- The left side should carry the heading, description, and CTAs.
- The right side should contain a visual summary panel rather than a large illustration.
- The right-side panel should be built from existing components and tokens, for example:
  - a `Card`-styled summary block
  - a miniature stack of buttons, form controls, or token labels
  - short metrics such as number of documented UI components or docs categories, if derived from current repo state

Content tone:

- Use product language that is descriptive and grounded.
- Avoid exaggerated claims like “world-class” or “beautiful out of the box.”
- Emphasize semantics, consistency, and documentation clarity.

### 2. System Principles / Value Summary
This section should explain what makes the design system coherent.

Required content:

- 3 to 4 principle cards.
- Each card should have:
  - a short title
  - a one- to two-sentence description
- The principles should reflect the actual architecture and styling approach in this repo.

Recommended principle themes:

- `Semantic tokens`
  - Explain that styling is built around token names like `system-card`, `system-border`, and `system-heading`.
- `Reusable primitives`
  - Explain that UI building blocks live in `components/ui` and are meant to compose into larger patterns.
- `Docs-first workflow`
  - Explain that components are paired with usage examples, previews, and structured documentation entries.
- `Consistent states`
  - Explain that focus, disabled, error, and status states use shared patterns and semantic colors.

Implementation expectations:

- Reuse `Card` or card-like styling consistent with the docs pages.
- Do not create highly decorative cards that feel unrelated to the rest of the interface.

### 3. Featured Component Categories
This section should help users understand what kinds of building blocks exist and where to go next.

Required content:

- At least 3 category entries:
  - `UI Components`
  - `Blocks & Sections`
  - `AI Components`
- Each category entry should include:
  - title
  - short description
  - destination link
  - a small list of representative items

Category-specific guidance:

- `UI Components`
  - Mention currently documented controls such as `Button`, `Input`, `Textarea`, `Checkbox`, and `Radio`.
- `Blocks & Sections`
  - Mention higher-level pieces such as `Card`, `Tabs`, and `Sidebar`.
- `AI Components`
  - Acknowledge that this section exists, but keep the copy honest about its current maturity if the page is still sparse.

Layout expectations:

- Render as a responsive grid of cards or linked panels.
- Each entry should be obviously clickable and should visually match the token-based card language already used elsewhere in the repo.

### 4. Curated Live Preview Section
The homepage should include at least one section that shows real components in action, but it should remain lighter than the dedicated docs pages.

Required behavior:

- Show a curated, mixed preview of the design system rather than a full documentation dump.
- Use existing components from `components/ui` and `components/blocks`.
- Keep the preview intentionally composed and compact.

Recommended content mix:

- A short button row that shows variant range.
- One form cluster using `Input` and `Textarea` or `Checkbox` / `Radio`.
- One compositional block such as `Card` or `Tabs`.

Implementation options:

- Preferred: build a homepage-specific preview composition directly in `app/page.tsx` or a small block component.
- Optional: use `ComponentShowcase` for one or two curated previews if code/usage tabs are intentionally part of the homepage experience.

Constraint:

- Do not embed the entire `/components/ui` page into the homepage.
- Do not show every component category at full length.
- If `ComponentShowcase` is used, the page should still read like a landing page first and a docs page second.

### 5. Documentation Pathways / Next Steps
The homepage should end by helping users choose where to go.

Required content:

- A short section title such as `Explore the system` or `Start with the docs`.
- 2 to 4 next-step links.

Required destinations:

- `/components/ui`
- `/components/blocks`

Optional destinations if the routes are intentionally kept in navigation:

- `/components/ai`
- future docs surfaces such as `/design-tokens` or `/guidelines`, but only if the copy makes it clear these are navigation pathways and not necessarily fully realized sections yet

Purpose:

- Reduce ambiguity for first-time visitors.
- Make the homepage feel complete even when some sections of the site are still growing.

## Visual Direction
The homepage should extend the current design language already established in `styles/globals.css` and shared docs primitives.

Required visual characteristics:

- Light semantic background with subtle contrast between `system-base`, `system-card`, `system-soft`, and `system-border`
- Strong heading hierarchy using `text-system-heading`
- Supporting copy in `text-system-text` and `text-system-comment`
- Rounded panels and cards that match the current `Card` and docs styling language
- Soft borders and restrained shadows using existing token-driven patterns like `shadow-[--shadow-diffuse]`

Recommended visual accents:

- Use subtle grid, radial, or inset panel treatments that relate to `DocsPreviewCanvas` and the global page-shell treatment
- Use status colors sparingly as informative accents, not as the main page palette
- Maintain clean whitespace and avoid over-layering effects

Avoid:

- Gradient-heavy marketing visuals that overpower the documentation aesthetic
- Bright accent colors that are not mapped to existing semantic tokens
- Dense copy blocks without visual grouping

## Content Requirements
Homepage copy should be specific to this repository and reflect the actual project structure.

It should mention or imply:

- this is a design system
- components are documented
- the system uses semantic styling tokens
- primitives and larger blocks both exist
- the docs experience is a major part of the project

It should not claim:

- that every listed route is fully complete
- that there is a mature token browser unless one is actually implemented
- that the system includes features not present in the repo

## Implementation Notes
- Keep the root page inside the existing `DefaultLayout`; do not replace the app shell.
- Reuse `Button`, `Card`, `Input`, `Textarea`, `Checkbox`, `Radio`, `Tabs`, or other existing components where they strengthen the page.
- If a new homepage-specific block is introduced, place it under `components/blocks` and keep it generic enough to be reusable if possible.
- If `ComponentShowcase` is used with a new `componentName`, make sure the referenced source file is resolvable by `scripts/generate-component-source.mjs`.
- Do not edit `lib/component-source.ts` manually; regenerate it only through the existing script flow when needed.
- Keep the markup accessible:
  - semantic `section` usage
  - clear heading order
  - descriptive link text
  - interactive examples that remain keyboard accessible

## Suggested File Scope
Expected primary file:

- `app/page.tsx`

Possible supporting files if extraction is helpful:

- `components/blocks/HomeHero.tsx`
- `components/blocks/HomePrinciples.tsx`
- `components/blocks/HomeCategoryGrid.tsx`
- `components/blocks/HomePreviewSection.tsx`
- `components/blocks/HomeNextSteps.tsx`

These filenames are suggestions, not requirements. The main requirement is that homepage-specific logic stays organized and consistent with the existing block-based architecture.

## Acceptance Criteria
The homepage work should be considered complete when all of the following are true:

- The page clearly introduces `Basic Design System` as a semantic, docs-driven component library.
- The page includes a meaningful hero with direct paths into the component docs.
- The page explains the system’s design principles in a structured, scannable way.
- The page highlights the current docs categories without pretending the site is larger than it is.
- The page includes a curated live component preview that uses real project components.
- The page ends with clear next-step navigation.
- The page is visually consistent with the current tokens, borders, spacing, and card treatments used across the repo.
- The page works on mobile and desktop without the layout collapsing awkwardly.
- The implementation does not manually edit generated files.

## References
- Use `app/page.tsx` as the current homepage baseline.
- Use `components/layout/DefaultLayout.tsx` and `components/blocks/Navigation.tsx` as the source of truth for the app shell and global navigation context.
- Use `app/components/ui/page.tsx` and `app/components/blocks/page.tsx` as references for what content already exists deeper in the docs.
- Use `components/blocks/Card.tsx` and `components/blocks/DocsPagePrimitives.tsx` as references for card styling, preview surfaces, and section composition.
- Use `styles/globals.css` as the source of truth for semantic tokens and global surface treatment.
- Use `lib/constants.ts` to stay aligned with the current docs navigation categories.

## Notes
- Keep the homepage aligned with the repo’s current reality: this is a growing design system with a documented structure, not a finished enterprise platform.
- The strongest version of this page will feel editorial and intentional, with a few well-composed previews and clear pathways, instead of trying to show everything at once.
- If there is a tradeoff between visual ambition and consistency with the established system, choose consistency.
