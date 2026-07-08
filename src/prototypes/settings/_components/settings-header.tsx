"use client";

import { PrototypeComponent } from "proto-plugin";
import { Menu, Settings } from "lucide-react";

import { cn } from "@/lib/cn";

type SettingsHeaderProps = {
  onToggleSidebar?: () => void;
};

function BreadcrumbLink({
  label,
  icon,
  isLast = false,
}: {
  label: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <li className="flex items-center space-x-2" tabIndex={-1}>
      <div className="flex flex-wrap items-center gap-2.5">
        <div
          className={cn(
            "flex items-center gap-1 text-13 font-medium",
            isLast ? "text-primary cursor-default" : "text-tertiary hover:text-primary",
          )}
        >
          {icon ? (
            <div className="flex h-5 w-5 items-center justify-center overflow-hidden !text-16">{icon}</div>
          ) : null}
          <div className="relative line-clamp-1 block max-w-[150px] truncate overflow-hidden">{label}</div>
        </div>
      </div>
    </li>
  );
}

export function SettingsHeader({ onToggleSidebar }: SettingsHeaderProps) {
  return (
    <PrototypeComponent
      id="settings-header"
      className="border-subtle bg-surface-1 relative z-10 flex h-header w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 border-b p-4"
    >
      <div className="flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap">
        <button
          type="button"
          className="group bg-layer-1 hover:bg-layer-1-hover flex size-7 cursor-pointer items-center justify-center rounded-sm transition-all md:hidden"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu size={14} className="text-secondary group-hover:text-primary transition-all" />
        </button>
        <div>
          <ol className="flex flex-grow items-center gap-0.5 overflow-hidden">
            <BreadcrumbLink
              label="Settings"
              icon={<Settings className="text-tertiary h-4 w-4" />}
            />
            <span className="text-tertiary px-0.5 text-13">/</span>
            <BreadcrumbLink label="General" isLast />
          </ol>
        </div>
      </div>
    </PrototypeComponent>
  );
}
