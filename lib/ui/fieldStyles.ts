import { cn } from "@/lib/utils";

type FieldKind = "input" | "textarea";

const sharedFieldStyles =
  "peer w-full rounded-sm border border-system-border bg-system-card text-sm leading-5 text-system-heading shadow-[--shadow-diffuse] transition-[border-color,box-shadow,background-color] duration-150 ease-out placeholder:text-transparent hover:border-system-heading/20 focus-visible:outline-none focus-visible:border-system-info focus-visible:ring-2 focus-visible:ring-system-info/20 disabled:cursor-not-allowed disabled:opacity-50 font-sans";

const sharedErrorFieldStyles =
  "border-system-error hover:border-system-error focus-visible:border-system-error focus-visible:ring-system-error/20";

const fieldKindStyles: Record<FieldKind, string> = {
  input:
    "h-14 px-3 pb-2 pt-5 file:border-0 file:bg-transparent file:text-sm file:font-sans",
  textarea: "min-h-[120px] resize-y px-3 pb-3 pt-7",
};

const sharedLabelStyles =
  "pointer-events-none absolute left-3 z-10 origin-[0] -translate-y-1/2 scale-100 transform-gpu text-system-text font-sans will-change-transform transition-[color,transform,top] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-75 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-75 peer-focus:text-system-info";

const sharedErrorLabelStyles = "text-system-error peer-focus:text-system-error";

const labelKindStyles: Record<FieldKind, string> = {
  input: "top-1/2",
  textarea: "top-6",
};

export function getFieldClass(
  kind: FieldKind,
  hasError: boolean,
  className?: string,
) {
  return cn(
    sharedFieldStyles,
    fieldKindStyles[kind],
    hasError && sharedErrorFieldStyles,
    className,
  );
}

export function getFloatingLabelClass(kind: FieldKind, hasError: boolean) {
  return cn(
    sharedLabelStyles,
    labelKindStyles[kind],
    hasError && sharedErrorLabelStyles,
  );
}
