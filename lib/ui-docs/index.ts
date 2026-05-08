import { buttonDoc } from "@/lib/ui-docs/button";
import { checkboxDoc } from "@/lib/ui-docs/checkbox";
import { inputDoc } from "@/lib/ui-docs/input";
import type { UiComponentDoc } from "@/lib/types";
import { textareaDoc } from "./textarea";

export const uiComponentDocsBySlug: Record<string, UiComponentDoc> = {
  button: buttonDoc,
  checkbox: checkboxDoc,
  input: inputDoc,
  textarea: textareaDoc,
};

export function getUiComponentDoc(slug: string) {
  return uiComponentDocsBySlug[slug];
}

export type { UiComponentDoc } from "@/lib/types";
