"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  delayDuration?: number;
}

export function Tooltip({
  content,
  children,
  side = "top",
  className,
  delayDuration = 200,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = React.useId();

  const clearOpenTimer = React.useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleOpen = React.useCallback(() => {
    clearOpenTimer();

    if (delayDuration <= 0) {
      setIsVisible(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      timeoutRef.current = null;
    }, delayDuration);
  }, [clearOpenTimer, delayDuration]);

  const handleClose = React.useCallback(() => {
    clearOpenTimer();
    setIsVisible(false);
  }, [clearOpenTimer]);

  React.useEffect(() => handleClose, [handleClose]);

  const existingDescribedBy = children.props["aria-describedby"];
  const describedBy = isVisible
    ? [existingDescribedBy, id].filter(Boolean).join(" ")
    : existingDescribedBy;

  // cloneElement preserves the child's ref while allowing the tooltip to
  // compose its pointer, focus, and ARIA behavior.
  // eslint-disable-next-line react-hooks/refs
  const trigger = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      handleOpen();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      handleClose();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      handleOpen();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      handleClose();
      children.props.onBlur?.(e);
    },
    "aria-describedby": describedBy || undefined,
  });

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-flex w-fit">
      {trigger}
      {isVisible && (
        <div
          id={id}
          role="tooltip"
          className={cn(
            "absolute z-50 px-3 py-1.5 text-xs font-medium text-system-heading bg-system-card border border-system-border rounded-[4px] shadow-md whitespace-nowrap pointer-events-none animate-in fade-in-0 zoom-in-95",
            sideClasses[side],
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
