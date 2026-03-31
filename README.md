Design System

#### Shared DRY styling
Implemented a shared floating-field system for Input and Textarea with cleaner styling and smoother interactions.
Shared form-field styles are now centralized in `lib/ui/fieldStyles.ts` and used by both `Input` and `Textarea`.
This keeps hover, focus, error, and floating-label behavior visually consistent while preserving each component's unique layout (`Input` single-line, `Textarea` multi-line/resizable).

The differences:
Input: fixed single-line height
Textarea: multi-line with min-height and resize-y
