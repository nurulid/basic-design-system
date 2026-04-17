import type { ReactNode } from "react";

export type DocsPropsRow = {
  name: string;
  type: string;
  description: string;
};

export type UiDocGuideline = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type DosDontsItem = {
  title: string;
  description: string;
  preview?: ReactNode;
  dangerous?: boolean;
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
  dosAndDonts?: {
    dos: DosDontsItem[];
    donts: DosDontsItem[];
  };
  propsRows: DocsPropsRow[];
  relatedComponents: string[];
};
