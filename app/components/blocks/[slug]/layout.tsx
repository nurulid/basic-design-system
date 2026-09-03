import { DocNavigation } from "@/components/blocks/DocNavigation";
import { componentDocsSection } from "@/lib/constants";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-12">
      <div className="min-w-0 flex-1">{children}</div>
      <DocNavigation items={componentDocsSection} />
    </section>
  );
}
