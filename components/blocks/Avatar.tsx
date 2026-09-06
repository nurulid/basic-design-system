"use client";

import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-[4px] bg-system-soft items-center justify-center text-system-text border border-system-border shadow-sm font-mono",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-12 w-12 text-base",
        lg: "h-16 w-16 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface AvatarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt = "Avatar", fallback, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(!!src);
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, className }))}
        {...props}
      >
        {src && !hasError && (
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(
              "object-cover transition-opacity duration-300 z-10",
              isLoading ? "opacity-0" : "opacity-100",
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            referrerPolicy="no-referrer"
          />
        )}

        {isLoading && src && !hasError && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-system-soft">
            <Loader2 className="h-1/2 w-1/2 animate-spin text-system-text" />
          </div>
        )}

        {(!src || hasError) &&
          (fallback ? (
            <span className="font-medium uppercase tracking-wider z-0 text-system-heading">
              {fallback.slice(0, 2)}
            </span>
          ) : (
            <User
              className={cn(
                "text-system-text z-0",
                size === "sm"
                  ? "h-4 w-4"
                  : size === "lg"
                    ? "h-8 w-8"
                    : "h-6 w-6",
              )}
            />
          ))}
      </div>
    );
  },
);
Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
