import type { HTMLAttributes, ReactNode } from "react";

export type SidebarItem = {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
};

export type SidebarProps = HTMLAttributes<HTMLDivElement> & {
  items: SidebarItem[];
  title?: string;
  defaultCollapsed?: boolean;
  defaultActiveId?: string;
  panelContent?: ReactNode;
  onItemSelect?: (item: SidebarItem) => void;
};
