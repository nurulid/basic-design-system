"use client";

import * as React from "react";
import {
  Bot,
  Compass,
  FolderKanban,
  MessageSquare,
  Settings,
} from "lucide-react";
import {
  Sidebar,
} from "@/components/blocks/Sidebar";
import type { SidebarItem } from "@/lib/types";

const sidebarItems: SidebarItem[] = [
  { id: "assistant", label: "Assistant", icon: <Bot className="h-4 w-4" /> },
  {
    id: "conversations",
    label: "Conversations",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  { id: "explore", label: "Explore", icon: <Compass className="h-4 w-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

export function SidebarDemo() {
  const [activeLabel, setActiveLabel] = React.useState(sidebarItems[0].label);

  return (
    <Sidebar
      title="AI Workspace"
      items={sidebarItems}
      onItemSelect={(item) => setActiveLabel(item.label)}
      panelContent={
        <div className="rounded-2xl border border-system-border bg-system-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-system-comment">
            Active view
          </p>
          <h4 className="mt-2 text-base font-semibold text-system-heading">
            {activeLabel}
          </h4>
          <p className="mt-2 text-sm text-system-text">
            Collapse the sidebar to keep quick icon access while saving room for
            main content.
          </p>
        </div>
      }
    />
  );
}
