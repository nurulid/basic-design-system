"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

export interface SourceCodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  filename?: string;
}

export const SourceCodeBlock = React.forwardRef<
  HTMLPreElement,
  SourceCodeBlockProps
>(({ className, code, language = "typescript", filename, ...props }, ref) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // A very simple syntax highlighter simulation for the requested style
  const highlightCode = (codeString: string) => {
    return codeString.split("\n").map((line, i) => {
      if (line.trim().startsWith("//")) {
        return (
          <span key={i} className="text-system-comment block">
            {line}
          </span>
        );
      }

      // Highlight logic keywords like use, const, return
      const highlightedLine = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(
          /(["'`])(.*?)(["'`])/g,
          '<span class="text-system-success">$1$2$3</span>',
        )
        .replace(
          /\b(use|const|let|var|return|function|import|from|export|default)\b(?![^<]*>)/g,
          '<span class="text-system-info font-medium">$1</span>',
        )
        .replace(
          /\b(true|false|null|undefined)\b(?![^<]*>)/g,
          '<span class="text-system-warning">$1</span>',
        )
        .replace(
          /([a-zA-Z0-9_]+)(?=\()(?![^<]*>)/g,
          '<span class="text-system-heading">$1</span>',
        );

      return (
        <span
          key={i}
          className="block text-system-text"
          dangerouslySetInnerHTML={{ __html: highlightedLine || " " }}
        />
      );
    });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-system-border bg-system-card font-mono text-sm shadow-[--shadow-diffuse]">
      {filename && (
        <div className="flex items-center justify-between border-b border-system-border bg-system-soft px-4 py-2 text-xs text-system-text">
          <span>{filename}</span>
          <span className="uppercase opacity-50">{language}</span>
        </div>
      )}

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 rounded-sm border border-system-border bg-system-soft p-1.5 text-system-text opacity-0 transition-opacity hover:bg-system-border hover:text-system-heading focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-system-info group-hover:opacity-100"
          aria-label={copied ? "Copied to clipboard" : "Copy code"}
        >
          {copied ? (
            <Check className="h-4 w-4 text-system-success" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>

        <div aria-live="polite" className="sr-only">
          {copied ? "Code copied to clipboard" : ""}
        </div>

        <pre
          ref={ref}
          className={cn(
            "overflow-x-auto p-4 scrollbar-thin scrollbar-track-system-base scrollbar-thumb-system-border hover:scrollbar-thumb-system-comment",
            className,
          )}
          {...props}
        >
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  );
});
SourceCodeBlock.displayName = "SourceCodeBlock";
