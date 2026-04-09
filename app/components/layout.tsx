import { ContextualComponentsSidebar } from "@/components/blocks/ContextualComponentsSidebar";
import { SidebarNavigation } from "@/components/blocks/SidebarNavigation";
import { SidebarLayout } from "@/components/layout/SidebarLayout";
import { componentsNavigation } from "@/lib/constants";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <div className="space-y-2">
        <SidebarNavigation title="components" items={componentsNavigation} />
        <ContextualComponentsSidebar />
      </div>
      <main className="flex-1 min-w-0 space-y-24">{children}</main>
    </SidebarLayout>
  );
}
