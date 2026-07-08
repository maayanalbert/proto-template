"use client";

import { Search } from "lucide-react";
import { PrototypeComponent } from "proto-plugin";

import { cn } from "@/lib/cn";

import { NeutralButton, NeutralInput } from "./neutral-ui";

type EventTypesPageHeaderProps = {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onNewClick: () => void;
};

export function EventTypesPageHeader({
  searchTerm,
  onSearchTermChange,
  onNewClick,
}: EventTypesPageHeaderProps) {
  return (
    <PrototypeComponent id="event-types-page-header" className="mb-0 flex items-center md:mb-6 md:mt-0 lg:mb-8">
      <header className="flex w-full max-w-full flex-wrap items-center gap-2 md:flex-nowrap md:gap-0">
        <div className="hidden min-w-0 flex-1 ltr:mr-4 rtl:ml-4 md:block">
          <h3 className="font-cal text-emphasis inline max-w-28 truncate text-xl font-semibold tracking-wide sm:max-w-72 md:max-w-80 xl:max-w-full">
            Event types
          </h3>
          <p className="text-default hidden text-sm md:block" data-testid="subtitle">
            Configure different events for people to book on your calendar.
          </p>
        </div>
        <div className="shrink-0 md:relative md:bottom-auto md:right-auto">
          <div className="flex items-center gap-4">
            <div className="max-w-64">
              <div
                className={cn(
                  "border-default bg-default flex w-full max-w-64 items-stretch overflow-hidden rounded-[10px] border shadow-outline-gray-rested",
                  "focus-within:border-emphasis focus-within:shadow-outline-gray-focused",
                )}
              >
                <div className="border-default bg-subtle text-subtle flex items-center px-3">
                  <Search className="h-4 w-4" />
                </div>
                <NeutralInput
                  type="search"
                  value={searchTerm}
                  placeholder="Search"
                  autoComplete="off"
                  onChange={(event) => onSearchTermChange(event.target.value)}
                  className="rounded-none border-0 shadow-none focus:shadow-none"
                />
              </div>
            </div>
            <NeutralButton data-testid="new-event-type" onClick={onNewClick}>
              New
            </NeutralButton>
          </div>
        </div>
      </header>
    </PrototypeComponent>
  );
}
