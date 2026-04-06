"use client";

import { usePathname } from "next/navigation";
import { SidebarNavigation } from "@/components/blocks/SidebarNavigation";
import { getSidebarConfig } from "@/lib/constants";

export function ContextualComponentsSidebar() {
  const pathname = usePathname();
  const { title, items } = getSidebarConfig(pathname);

  return <SidebarNavigation title={title} items={items} />;
}
