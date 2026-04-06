import type { DocsPropsRow } from "@/components/blocks/DocsPagePrimitives";
import type { ReactNode } from "react";

export type UiDocGuideline = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type UiComponentDoc = {
  title: string;
  description: string;
  showcase: {
    name: string;
    componentName: string;
    usageCode: string;
    preview: ReactNode;
  };
  guidelines: UiDocGuideline[];
  propsRows: DocsPropsRow[];
  relatedComponents: string[];
};
