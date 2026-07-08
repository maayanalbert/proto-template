"use client";

import { PrototypeComponent } from "proto-plugin";
import type { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export function SettingsInput({
  className,
  hasError = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  return (
    <PrototypeComponent id="settings-ui.settings-input">
      <input
        className={cn(
          "placeholder-tertiary text-13 block w-full rounded-md border-[0.5px] border-subtle-1 bg-layer-2 px-3 py-2 focus:outline-none",
          hasError && "border-danger-strong",
          className,
        )}
        {...props}
      />
    </PrototypeComponent>
  );
}

export function SettingsButton({
  className,
  variant = "primary",
  size = "lg",
  loading = false,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary";
  size?: "lg";
  loading?: boolean;
}) {
  return (
    <PrototypeComponent id="settings-ui.settings-button">
      <button
        type="button"
        disabled={loading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center gap-1 whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none",
          variant === "primary" &&
            "bg-accent-primary text-on-color hover:bg-accent-primary-hover active:bg-accent-primary-active disabled:bg-layer-disabled disabled:text-on-color-disabled",
          size === "lg" && "text-body-xs-medium h-7 rounded-md px-2",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </PrototypeComponent>
  );
}

export function SettingsToggleSwitch({
  value,
  onChange,
  disabled = false,
  className,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <PrototypeComponent id="settings-ui.settings-toggle-switch">
      <button
        type="button"
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={() => onChange(!value)}
        className={cn(
          "relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border border-subtle transition-colors duration-200 ease-in-out focus:outline-none",
          value ? "bg-accent-primary" : "settings-toggle-off",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span className="sr-only">Toggle telemetry</span>
        <span
          aria-hidden="true"
          className={cn(
            "settings-toggle-knob inline-block h-3 w-3 transform self-center rounded-full ring-0 transition duration-200 ease-in-out",
            value ? "translate-x-3.5" : "translate-x-0.5",
          )}
        />
      </button>
    </PrototypeComponent>
  );
}

export function SettingsAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <PrototypeComponent id="settings-ui.settings-avatar">
      <div
        className={cn(
          "text-body-sm-medium flex size-6 items-center justify-center rounded-sm bg-[oklch(0.5296_0.149485_148.9899)] text-[oklch(0.9235_0.001733_230.6853)]",
          className,
        )}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    </PrototypeComponent>
  );
}
