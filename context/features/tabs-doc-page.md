# Tabs Component Documentation

## Overview
`Tabs` organizes related views into a single context so users can switch between them without navigating away. The documentation page should explain the compound API of `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent`, and show both the visual relationship between tabs and panels and the component's keyboard behavior.

The implementation should use the design system's semantic tokens and expose accessible tablist, tab, and tabpanel relationships. It should support both uncontrolled usage with `defaultValue` and controlled usage with `value` and `onValueChange`.

## Requirements
- Follow the structure used by `lib/ui-docs/button.tsx`: `title`, `description`, `showcase`, `guidelines`, `dosAndDonts`, `propsRows`, and `relatedComponents`.
- Document the compound API: `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent`.
- Keep `Tabs` usable as a controlled or uncontrolled component. A selected trigger should update its matching content panel.
- Expose `role="tablist"`, `role="tab"`, and `role="tabpanel"` semantics. The active tab and its panel must be connected with `aria-controls` and `aria-labelledby`.
- Support mouse selection, visible active and focus states, disabled triggers, and native HTML attributes and `className` on compound parts where applicable.
- Support keyboard navigation with Arrow Left/Right, Home, and End. Navigation should skip disabled triggers and keep focus within the current tab list.
- Preserve consumer-provided `onClick` and `onKeyDown` handlers when the component adds its own interaction behavior.
- Keep the existing `UsageCodesUI.tabsUsage` example accurate and register the completed doc in `lib/ui-docs/index.ts` so `/components/ui/tabs` resolves.

Required `guidelines` topics:
- `Features`: controlled and uncontrolled state, keyboard navigation, active-state styling, disabled triggers, semantic relationships, and semantic token styling.
- `When to use`: a small set of related views that share one context; explain when another pattern is better for comparing all choices at once.
- `Accessibility`: concise labels, visible focus, tablist/tab/tabpanel semantics, Arrow/Home/End operation, and sufficient contrast.

Required `dosAndDonts` topics:
- `dos`: use short descriptive labels, group related views, keep the active state clear, and choose a useful default tab.
- `donts`: do not use tabs for unrelated content, use sentence-length labels, overload one tab list, or hide critical information in an inactive panel.

Required `propsRows` items:
- `Tabs`: `defaultValue`, `value`, `onValueChange`, and children.
- `TabsList`: native div attributes such as `id`, `aria-label`, and `className`.
- `TabsTrigger`: required `value`, plus native button attributes such as `disabled`, `id`, `aria-label`, and `className`.
- `TabsContent`: required `value`, plus native div attributes such as `id`, `aria-label`, `tabIndex`, and `className`.

Required `relatedComponents`: `Accordion`, `Select`, and `Radio`.

## References
- Use `lib/ui-docs/button.tsx` as the completeness and formatting reference.
- Use `components/ui/Tabs.tsx` as the source of truth for the compound component API.
- Use `components/examples/UsageCodesUI.tsx` for the source preview code.

## Notes
- Keep the wording aligned with the semantic design-system tone rather than product-marketing language.
- Do not invent vertical orientation, automatic activation options, multi-row tab behavior, or animated panel transitions unless they are implemented in `components/ui/Tabs.tsx`.
- Inactive panels are not rendered by the current implementation; document the visible selected panel behavior rather than claiming all panels remain mounted.
