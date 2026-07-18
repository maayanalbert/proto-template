"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Calendar,
  ChevronDown,
  CircleDot,
  Clock,
  Copy,
  ExternalLink,
  LayoutGrid,
  Link2,
  Lock,
  MoreHorizontal,
  Search,
  X,
  type LucideIcon,
} from "lucide-react";
import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/cn";

const ICONS = {
  link: Link2,
  calendar: Calendar,
  clock: Clock,
  "grid-3x3": LayoutGrid,
  "external-link": ExternalLink,
  copy: Copy,
  "chevron-down": ChevronDown,
  search: Search,
  disc: CircleDot,
  x: X,
  lock: Lock,
  ellipsis: MoreHorizontal,
  "arrow-right": ArrowRight,
} as const satisfies Record<string, LucideIcon>;

export type NeutralIconName = keyof typeof ICONS;

export function NeutralIcon({
  name,
  className,
}: {
  name: NeutralIconName;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={cn("h-4 w-4 shrink-0", className)} aria-hidden />;
}

export function cnMerge(...inputs: Parameters<typeof cn>) {
  return cn(...inputs);
}

export function NeutralButton({
  className,
  variant = "button",
  color,
  children,
  StartIcon,
  href,
  target,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "button" | "icon";
  color?: "primary" | "secondary" | "minimal";
  StartIcon?: NeutralIconName;
  href?: string;
  target?: string;
}) {
  const isIcon = variant === "icon";
  const isMinimal = color === "minimal";
  const isSecondary = color === "secondary" || isIcon;

  const classes = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition",
    isIcon ? "h-9 w-9 border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" : "h-9 px-4",
    !isIcon && !isMinimal && !isSecondary && "bg-neutral-900 text-white hover:bg-neutral-800",
    !isIcon && isSecondary && "border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50",
    !isIcon && isMinimal && "text-neutral-600 hover:bg-neutral-100",
    className,
  );

  const content = (
    <>
      {StartIcon ? <NeutralIcon name={StartIcon} className={children ? "mr-2" : undefined} /> : null}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} className={classes} aria-label={props["aria-label"]}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export function NeutralButtonGroup({
  combined,
  children,
  className,
}: {
  combined?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex",
        combined && "[&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button:not(:first-child)]:border-l-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NeutralArrowButton({
  arrowDirection,
  onClick,
  className,
}: {
  arrowDirection: "up" | "down";
  onClick?: () => void;
  className?: string;
}) {
  const Icon = arrowDirection === "up" ? ArrowUp : ArrowDown;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded border border-neutral-200 bg-white p-0.5 text-neutral-500 opacity-0 shadow-sm transition group-hover:opacity-100",
        arrowDirection === "up" ? "-translate-x-1/2" : "-translate-x-1/2 translate-y-2",
        className,
      )}
      aria-label={arrowDirection === "up" ? "Move up" : "Move down"}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}

export function NeutralBadge({
  variant = "gray",
  startIcon,
  children,
  className,
}: {
  variant?: "gray" | "orange";
  startIcon?: NeutralIconName;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium",
        variant === "orange" ? "bg-orange-100 text-orange-800" : "bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {startIcon ? <NeutralIcon name={startIcon} className="h-3 w-3" /> : null}
      {children}
    </span>
  );
}

export function NeutralLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <label className={cn("text-sm font-medium text-neutral-900", className)}>{children}</label>;
}

export function NeutralInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "text-default h-10 w-full min-w-0 bg-transparent px-3 text-sm outline-none placeholder:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

export function NeutralAvatar({
  imageSrc,
  alt,
  className,
}: {
  imageSrc?: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={cn("h-full w-full rounded-full object-cover", className)}
    />
  );
}

export function NeutralEmptyScreen({
  Icon: iconName = "link",
  headline,
  description,
  className,
  buttonRaw,
}: {
  Icon?: NeutralIconName;
  headline: string;
  description: string;
  className?: string;
  buttonRaw?: ReactNode;
}) {
  return (
    <div className={cn("mx-auto flex max-w-lg flex-col items-center py-16 text-center", className)}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
        <NeutralIcon name={iconName} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">{headline}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      {buttonRaw ? <div className="mt-6">{buttonRaw}</div> : null}
    </div>
  );
}

export function NeutralSegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition",
            value === option.value
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-600 hover:text-neutral-900",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function showToast(message: string, variant: "success" | "error" = "success") {
  if (variant === "error") {
    toast.error(message);
  } else {
    toast.success(message);
  }
}
