"use client";

import { Search } from "lucide-react";
import { PrototypeComponent } from "proto-plugin";

import { calBrandButtonClass, calButtonActiveContentClass, calSecondaryIconButtonClass } from "./cal-primitive-classes";

type EventTypesPageHeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onNewClick: () => void;
};

export function EventTypesPageHeader({
  searchQuery,
  onSearchChange,
  onNewClick,
}: EventTypesPageHeaderProps) {
  return (
    <PrototypeComponent
      id="event-types-page-header"
      className="flex items-center md:mb-6 md:mt-0 lg:mb-8"
    >
      <header className="flex w-full max-w-full items-center flex-wrap md:flex-nowrap gap-2 md:gap-0">
        <div className="hidden min-w-0 flex-1 ltr:mr-4 rtl:ml-4 md:block">
          <h3 className="font-cal text-emphasis inline truncate text-xl font-semibold tracking-wide">
            Event types
          </h3>
          <p className="text-default hidden text-sm md:block">
            Configure different events for people to book on your calendar.
          </p>
        </div>

        <div className="pwa:bottom-[max(7rem,_calc(5rem_+_env(safe-area-inset-bottom)))] fixed bottom-20 z-40 ltr:right-4 rtl:left-4 md:z-auto md:ltr:right-0 md:rtl:left-0 shrink-0 md:relative md:bottom-auto md:right-auto">
          <div className="flex items-center gap-4">
            <div className="max-w-64 focus:ring-offset-0! *:mb-0">
              <div className="rounded-[10px] border font-normal bg-default border-default text-default placeholder:text-muted hover:border-emphasis focus-within:border-emphasis focus-within:ring-0 focus-within:shadow-outline-gray-focused shadow-outline-gray-rested transition-all h-8 px-3 py-2 text-sm group relative mb-1 flex min-w-0 items-center gap-1 focus-within:shadow-outline-gray-focused focus-within:border-emphasis">
                <div className="flex shrink-0 items-center justify-center whitespace-nowrap pointer-events-auto cursor-pointer">
                  <Search className="h-4 w-4 text-subtle" aria-hidden="true" />
                </div>
                <input
                  data-testid="input-field"
                  placeholder="Search"
                  className="w-full min-w-0 truncate border-0 bg-transparent focus:outline-none focus:ring-0 text-default text-sm font-medium leading-none placeholder:text-muted rounded-none pl-0.5 pr-0 max-w-64"
                  autoComplete="off"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => onSearchChange(event.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              data-testid="new-event-type"
              className={calBrandButtonClass}
              onClick={onNewClick}
            >
              <div className={calButtonActiveContentClass}>New</div>
            </button>
          </div>
        </div>
      </header>
    </PrototypeComponent>
  );
}
