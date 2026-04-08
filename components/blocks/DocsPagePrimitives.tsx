import type { ReactNode } from "react";
import type { DocsPropsRow } from "@/lib/types";

export function DocsPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="space-y-14 pb-6">
      <section id="overview" className="space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-system-heading">{title}</h1>
        <p className="max-w-3xl text-xl leading-8 text-system-text">{description}</p>
      </section>
      {children}
    </article>
  );
}

export function DocsPreviewCanvas({ children }: { children: ReactNode }) {
  return (
    <div
      className="space-y-12 rounded-2xl border border-system-border/70 p-6"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-system-border) 40%, transparent) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    >
      {children}
    </div>
  );
}

export function DocsFactCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-system-border bg-system-card p-6 shadow-[--shadow-diffuse]">
      <h3 className="flex items-center gap-2 text-xl font-semibold text-system-heading">
        <span className="text-system-heading">{icon}</span>
        {title}
      </h3>
      <div className="mt-4 text-sm leading-7 text-system-text">{children}</div>
    </article>
  );
}

export function DocsGuidelinesGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">{children}</div>;
}

export function DocsPropsApiTable({ rows }: { rows: DocsPropsRow[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-system-border bg-system-card shadow-[--shadow-diffuse]">
      <table className="w-full text-left">
        <thead className="bg-system-soft text-sm text-system-heading">
          <tr>
            <th className="px-5 py-4 font-semibold">Name</th>
            <th className="px-5 py-4 font-semibold">Type</th>
            <th className="px-5 py-4 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-system-border text-sm">
              <td className="px-5 py-4 font-mono text-system-heading">{row.name}</td>
              <td className="px-5 py-4 font-mono text-system-text">{row.type}</td>
              <td className="px-5 py-4 text-system-text">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocsRelatedComponents({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((name) => (
        <span
          key={name}
          className="rounded-full border border-system-border bg-system-card px-3 py-1.5 text-sm text-system-text"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
