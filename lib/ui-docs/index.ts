import { buttonDoc } from "@/lib/ui-docs/button";
import { cardDoc } from "@/lib/ui-docs/card";
import { checkboxDoc } from "@/lib/ui-docs/checkbox";
import { inputDoc } from "@/lib/ui-docs/input";
import { radioDoc } from "@/lib/ui-docs/radio";
import { switchDoc } from "@/lib/ui-docs/switch";
import { selectDoc } from "@/lib/ui-docs/select";
import type { UiComponentDoc } from "@/lib/types";
import { textareaDoc } from "./textarea";
import { accordionDoc } from "./accordion";
import { tooltipDoc } from "./tooltip";
import { avatarDoc } from "./avatar";
import { modalDoc } from "./modal";
import { progressDoc } from "./progress";
import { alertDoc } from "./alert";
import { breadcrumbDoc } from "./breadcrumb";
import { paginationDoc } from "./pagination";
import { tabsDoc } from "./tabs";
import { badgeDoc } from "./badge";

export const uiComponentDocsBySlug: Record<string, UiComponentDoc> = {
  button: buttonDoc,
  checkbox: checkboxDoc,
  input: inputDoc,
  radio: radioDoc,
  switch: switchDoc,
  select: selectDoc,
  textarea: textareaDoc,
  tabs: tabsDoc,
};

export const blockComponentDocsBySlug: Record<string, UiComponentDoc> = {
  badge: badgeDoc,
  accordion: accordionDoc,
  card: cardDoc,
  tooltip: tooltipDoc,
  avatar: avatarDoc,
  modal: modalDoc,
  progress: progressDoc,
  alert: alertDoc,
  breadcrumb: breadcrumbDoc,
  pagination: paginationDoc,
};

export function getUiComponentDoc(slug: string) {
  return uiComponentDocsBySlug[slug];
}

export function getBlockComponentDoc(slug: string) {
  return blockComponentDocsBySlug[slug];
}

export type { UiComponentDoc } from "@/lib/types";
