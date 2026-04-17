import type { ReactNode } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
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
  return <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">{children}</div>;
}

export function DocsPropsApiTable({ rows }: { rows: DocsPropsRow[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-system-border bg-system-card shadow-[--shadow-diffuse]">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed text-left">
          <colgroup>
            <col className="w-[25%]" />
            <col className="w-[45%]" />
            <col className="w-[35%]" />
          </colgroup>
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
                <td className="align-top px-5 py-4 font-mono text-system-heading wrap-break-word">
                  {row.name}
                </td>
                <td className="align-top px-5 py-4 font-mono text-system-text whitespace-normal wrap-anywhere">
                  {row.type}
                </td>
                <td className="align-top px-5 py-4 text-system-text wrap-break-word">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

export function DocsDosAndDontsSection({ title = "Best Practices", children }: { title?: string, children: ReactNode }) {
  return (
    <section id="best-practices" className="space-y-6 pt-4">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold tracking-tight text-system-heading lg:mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DocsDosAndDontsColumnTitle({
  label,
  tone,
}: {
  label: string;
  tone: "do" | "dont";
}) {
  const toneClassName =
    tone === "do"
      ? "border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-100"
      : "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-100";

  return (
      <div
        className={`flex items-center justify-center rounded-3xl border p-1 font-semibold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] ${toneClassName}`}
      >
        {label}
      </div>
  );
}

export function DocsDosAndDontsGrid({
  doChildren,
  dontChildren,
}: {
  doChildren: ReactNode;
  dontChildren: ReactNode;
}) {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="sticky top-28 z-20 hidden grid-cols-2 gap-4 lg:grid lg:gap-8">
        <DocsDosAndDontsColumnTitle label="Do" tone="do" />
        <DocsDosAndDontsColumnTitle label="Don't" tone="dont" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <div className="sticky top-28 z-10 lg:hidden">
            <DocsDosAndDontsColumnTitle label="Do" tone="do" />
          </div>
          {doChildren}
        </div>

        <div className="space-y-4">
          <div className="sticky top-28 z-10 lg:hidden">
            <DocsDosAndDontsColumnTitle label="Don't" tone="dont" />
          </div>
          {dontChildren}
        </div>
      </div>
    </div>
  );
}

export function DocsDoCard({ title, description, children }: { title: string, description: string, children?: ReactNode }) {
  return (
    <div className="rounded-3xl border border-green-200 dark:border-green-900/50 px-6 py-6 space-y-4">
      {children && (
        <div className="flex items-center justify-center py-8 bg-green-100/30 dark:bg-green-900/20 rounded-2xl border border-green-200/50 dark:border-green-900/30">
          {children}
        </div>
      )}
      <div className="flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-semibold text-green-900 dark:text-green-100">{title}</p>
          <p className="text-sm leading-relaxed text-green-800/80 dark:text-green-200/60">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function DocsDontCard({ title, description, children, dangerous }: { title: string, description: string, children?: ReactNode, dangerous?: boolean }) {
  return (
    <div className={`rounded-3xl border px-6 py-6 space-y-4
      ${dangerous ? "border-red-200 dark:border-red-900/50" : "border-rose-200 dark:border-rose-900/50"}`}>
      {children && (
        <div className={`flex items-center justify-center py-8 rounded-2xl border 
          ${dangerous ? "bg-red-100/30 dark:bg-red-900/20 border-red-200/50 dark:border-red-900/30" : "bg-rose-100/30 dark:bg-rose-900/20 border-rose-200/50 dark:border-rose-900/30"}`}>
          {children}
        </div>
      )}
      <div className="flex gap-3">
        {dangerous ? (
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
        ) : (
          <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
        )}
        <div className="space-y-1">
          <p className={`text-sm font-semibold ${dangerous ? "text-red-900 dark:text-red-100" : "text-rose-900 dark:text-rose-100"}`}>
             {title}
          </p>
          <p className={`text-sm leading-relaxed ${dangerous ? "text-red-800/80 dark:text-red-200/60" : "text-rose-800/80 dark:text-rose-200/60"}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function DocsSubHeading({ children }: { children: ReactNode }) {
  return (
    <span className="block mt-6 mb-2 font-medium tracking-widest text-xs uppercase text-system-text/60">
      {children}
    </span>
  );
}
