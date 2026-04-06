import { ContextualComponentsSidebar } from "@/components/blocks/ContextualComponentsSidebar";
import { SidebarLayout } from "@/components/layout/SidebarLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <ContextualComponentsSidebar />
      <main className="flex-1 min-w-0 space-y-24">{children}</main>
    </SidebarLayout>
  );
}
