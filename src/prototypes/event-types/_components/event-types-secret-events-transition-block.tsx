"use client";

import { Plus } from "lucide-react";
import { PrototypeComponent } from "proto-plugin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "proto-plugin/ui/dropdown-menu";
import { useState } from "react";

import { cn } from "@/lib/cn";

import { EventTypesFiltersBar } from "./event-types-filters-bar";
import {
  DEFAULT_EVENT_TYPES,
  SECRET_EVENTS_FILTER_LABEL,
} from "./event-types-mock-data";
import type {
  EventTypesSecretEventsTransitionChoice,
  EventTypesSecretEventsTransitionVariant,
} from "./event-types-secret-events-transition-content";
import { NeutralBadge, NeutralIcon, NeutralSegmentedControl } from "./neutral-ui";

type EventTypesSecretEventsTransitionBlockProps = {
  variant: EventTypesSecretEventsTransitionChoice;
  secretFilterActive: boolean;
  onSecretFilterChange: (active: boolean) => void;
  secretEventCount?: number;
};

function SecretEventsChip({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-subtle bg-default text-emphasis hover:bg-subtle inline-flex h-[34px] items-center gap-1 rounded-md border px-3 text-sm font-medium transition",
        active && "border-emphasis bg-subtle",
      )}
    >
      <NeutralIcon name="disc" className="h-4 w-4 shrink-0 stroke-[1.5px]" />
      <span>Event type</span>
      <NeutralBadge variant="gray" className="ml-2">
        {SECRET_EVENTS_FILTER_LABEL}
      </NeutralBadge>
      {active ? (
        <NeutralIcon name="x" className="h-4 w-4 shrink-0 stroke-[1.5px]" />
      ) : null}
    </button>
  );
}

function FilterChipRowEntry({
  secretFilterActive,
  onSecretFilterChange,
}: Pick<
  EventTypesSecretEventsTransitionBlockProps,
  "secretFilterActive" | "onSecretFilterChange"
>) {
  if (secretFilterActive) {
    return (
      <EventTypesFiltersBar
        secretFilterActive={secretFilterActive}
        onSecretFilterChange={onSecretFilterChange}
      />
    );
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <SecretEventsChip
        active={false}
        onClick={() => onSecretFilterChange(true)}
      />
    </div>
  );
}

function HeaderTabsEntry({
  secretFilterActive,
  onSecretFilterChange,
}: Pick<
  EventTypesSecretEventsTransitionBlockProps,
  "secretFilterActive" | "onSecretFilterChange"
>) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <NeutralSegmentedControl
        value={secretFilterActive ? "secret" : "all"}
        onChange={(value) => onSecretFilterChange(value === "secret")}
        options={[
          { value: "all", label: "All event types" },
          { value: "secret", label: SECRET_EVENTS_FILTER_LABEL },
        ]}
      />
    </div>
  );
}

function FilterDropdownEntry({
  secretFilterActive,
  onSecretFilterChange,
}: Pick<
  EventTypesSecretEventsTransitionBlockProps,
  "secretFilterActive" | "onSecretFilterChange"
>) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (secretFilterActive) {
    return (
      <EventTypesFiltersBar
        secretFilterActive={secretFilterActive}
        onSecretFilterChange={onSecretFilterChange}
      />
    );
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger
          aria-label="Add filter"
          className={cn(
            "border-subtle bg-default text-emphasis hover:bg-subtle inline-flex h-[34px] w-[34px] items-center justify-center rounded-md border transition",
          )}
        >
          <Plus className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[220px]">
          <DropdownMenuItem
            onSelect={() => {
              onSecretFilterChange(true);
              setMenuOpen(false);
            }}
          >
            {SECRET_EVENTS_FILTER_LABEL}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function TitleLinkEntry({
  secretFilterActive,
  onSecretFilterChange,
  secretEventCount,
}: Pick<
  EventTypesSecretEventsTransitionBlockProps,
  "secretFilterActive" | "onSecretFilterChange" | "secretEventCount"
>) {
  if (secretFilterActive) {
    return (
      <EventTypesFiltersBar
        secretFilterActive={secretFilterActive}
        onSecretFilterChange={onSecretFilterChange}
      />
    );
  }

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => onSecretFilterChange(true)}
        className="text-default hover:text-emphasis inline-flex items-center gap-1 text-sm font-medium transition"
      >
        View {SECRET_EVENTS_FILTER_LABEL.toLowerCase()}
        <span className="text-subtle">({secretEventCount ?? 0})</span>
        <NeutralIcon name="arrow-right" className="h-4 w-4 stroke-[1.5px]" />
      </button>
    </div>
  );
}

function renderVariantEntry(
  variant: EventTypesSecretEventsTransitionVariant,
  props: EventTypesSecretEventsTransitionBlockProps,
) {
  switch (variant) {
    case "filter-chip-row":
      return <FilterChipRowEntry {...props} />;
    case "header-tabs":
      return <HeaderTabsEntry {...props} />;
    case "filter-dropdown":
      return <FilterDropdownEntry {...props} />;
    case "title-link":
      return <TitleLinkEntry {...props} />;
    case "sidebar-subnav":
      if (props.secretFilterActive) {
        return (
          <EventTypesFiltersBar
            secretFilterActive={props.secretFilterActive}
            onSecretFilterChange={props.onSecretFilterChange}
          />
        );
      }
      return null;
    default:
      return null;
  }
}

export function EventTypesSecretEventsTransitionBlock({
  variant,
  secretFilterActive,
  onSecretFilterChange,
  secretEventCount = DEFAULT_EVENT_TYPES.filter((type) => type.isSecret).length,
}: EventTypesSecretEventsTransitionBlockProps) {
  if (variant === "no-entry") {
    if (!secretFilterActive) return null;
    return (
      <EventTypesFiltersBar
        secretFilterActive={secretFilterActive}
        onSecretFilterChange={onSecretFilterChange}
      />
    );
  }

  return (
    <PrototypeComponent
      id="event-types-secret-events-transition-block"
      className="shrink-0"
    >
      {renderVariantEntry(variant, {
        variant,
        secretFilterActive,
        onSecretFilterChange,
        secretEventCount,
      })}
    </PrototypeComponent>
  );
}
