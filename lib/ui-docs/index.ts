import { buttonDoc } from "@/lib/ui-docs/button";
import { inputDoc } from "@/lib/ui-docs/input";
import type { UiComponentDoc } from "@/lib/types";

export const uiComponentDocsBySlug: Record<string, UiComponentDoc> = {
  button: buttonDoc,
  input: inputDoc,
};

export function getUiComponentDoc(slug: string) {
  return uiComponentDocsBySlug[slug];
}

export type { UiComponentDoc } from "@/lib/types";
