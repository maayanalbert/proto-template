"use client";

import { PrototypeComponent } from "proto-plugin";

import { cn } from "@/lib/cn";

import { SECRET_EVENTS_FILTER_LABEL } from "./event-types-mock-data";
import { NeutralBadge, NeutralIcon } from "./neutral-ui";

type EventTypesFiltersBarProps = {
  secretFilterActive: boolean;
  onSecretFilterChange: (active: boolean) => void;
};

export function EventTypesFiltersBar({
  secretFilterActive,
  onSecretFilterChange,
}: EventTypesFiltersBarProps) {
  if (!secretFilterActive) return null;

  return (
    <PrototypeComponent
      id="event-types-filters-bar"
      className="mb-4 flex flex-wrap items-center gap-2"
    >
      <button
        type="button"
        onClick={() => onSecretFilterChange(false)}
        className={cn(
          "border-subtle bg-default text-emphasis hover:bg-subtle inline-flex h-[34px] items-center gap-1 rounded-md border px-3 text-sm font-medium transition",
        )}
      >
        <NeutralIcon name="disc" className="h-4 w-4 shrink-0 stroke-[1.5px]" />
        <span>Event type</span>
        <NeutralBadge variant="gray" className="ml-2">
          {SECRET_EVENTS_FILTER_LABEL}
        </NeutralBadge>
        <NeutralIcon name="x" className="h-4 w-4 shrink-0 stroke-[1.5px]" />
      </button>
    </PrototypeComponent>
  );
}
